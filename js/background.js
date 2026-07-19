// ======= THREE.JS BACKGROUND =======
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 28;

// Particles
const pCount = 220;
const pos = new Float32Array(pCount * 3);
const col = new Float32Array(pCount * 3);
for (let i = 0; i < pCount; i++) {
  const th = Math.random() * Math.PI * 2, 
        ph = Math.acos(2 * Math.random() - 1), 
        r = 12 + Math.random() * 20;
  pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
  pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
  pos[i * 3 + 2] = r * Math.cos(ph);
  const c = Math.random() > 0.35;
  col[i * 3] = c ? 0 : 0.67;
  col[i * 3 + 1] = c ? 1 : 0.75;
  col[i * 3 + 2] = c ? 0.92 : 0.84;
}

const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));

const pMat = new THREE.PointsMaterial({ 
  size: 0.15, 
  vertexColors: true, 
  transparent: true, 
  opacity: 0.7, 
  sizeAttenuation: true 
});
const particles = new THREE.Points(pGeo, pMat);
scene.add(particles);

// Wireframe Objects
const wMat = new THREE.MeshBasicMaterial({ 
  color: 0x00FFEB, 
  wireframe: true, 
  transparent: true, 
  opacity: 0.06 
});
const objs = [];

[
  [new THREE.IcosahedronGeometry(5, 1), [14, 6, -10], 0.003, 0.005],
  [new THREE.OctahedronGeometry(3.5), [-15, -5, -8], 0.006, 0.003],
  [new THREE.TorusGeometry(4, 1.2, 12, 48), [-5, 8, -15], 0.004, 0.006],
  [new THREE.TetrahedronGeometry(3), [10, -8, -5], 0.007, 0.004]
].forEach(([geo, p, rx, ry]) => {
  const m = new THREE.Mesh(geo, wMat.clone());
  m.position.set(...p);
  scene.add(m);
  objs.push({ mesh: m, rx, ry });
});

// Lines
const lMat = new THREE.LineBasicMaterial({ 
  color: 0x00CCBB, 
  transparent: true, 
  opacity: 0.07 
});
const lPts = [];
for (let i = 0; i < 60; i++) {
  const a = Math.floor(Math.random() * pCount) * 3, 
        b = Math.floor(Math.random() * pCount) * 3;
  lPts.push(pos[a], pos[a+1], pos[a+2], pos[b], pos[b+1], pos[b+2]);
}
const lGeo = new THREE.BufferGeometry();
lGeo.setAttribute('position', new THREE.Float32BufferAttribute(lPts, 3));
scene.add(new THREE.LineSegments(lGeo, lMat));

// Mouse tracking
let mX = 0, mY = 0, t = 0;
document.addEventListener('mousemove', e => {
  mX = (e.clientX / window.innerWidth - 0.5) * 2;
  mY = -(e.clientY / window.innerHeight - 0.5) * 2;
});

// Animation loop
const animate = () => {
  t += 0.008;
  requestAnimationFrame(animate);
  
  particles.rotation.y += 0.0008 + mX * 0.0003;
  particles.rotation.x += 0.0004 + mY * 0.0003;
  
  objs.forEach(({ mesh, rx, ry }) => {
    mesh.rotation.x += rx;
    mesh.rotation.y += ry;
    mesh.position.y += Math.sin(t + mesh.position.x) * 0.005;
  });
  
  camera.position.x += (mX * 2 - camera.position.x) * 0.02;
  camera.position.y += (mY * 1.5 - camera.position.y) * 0.02;
  camera.lookAt(scene.position);
  
  renderer.render(scene, camera);
};
animate();

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});