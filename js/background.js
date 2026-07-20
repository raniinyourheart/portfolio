// ====== THREE.JS BACKGROUND ======
(function initBackground() {
    console.log('🔄 Starting Background...');
    
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        console.error('❌ Canvas #bg-canvas tidak ditemukan!');
        return;
    }

    // Cek apakah THREE tersedia
    if (typeof THREE === 'undefined') {
        console.error('❌ THREE.js tidak ditemukan! Pastikan library di-load.');
        return;
    }

    console.log('✅ THREE.js ditemukan!');

    const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        antialias: true, 
        alpha: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 28;

    // ===== PARTICLE SYSTEM =====
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 12 + Math.random() * 20;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        
        const isCyan = Math.random() > 0.35;
        colors[i * 3] = isCyan ? 0 : 0.67;
        colors[i * 3 + 1] = isCyan ? 1 : 0.75;
        colors[i * 3 + 2] = isCyan ? 0.92 : 0.84;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ===== WIREFRAME OBJECTS =====
    const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00FFEB,
        wireframe: true,
        transparent: true,
        opacity: 0.06
    });
    const objects = [];

    const icosaGeo = new THREE.IcosahedronGeometry(5, 1);
    const icosa = new THREE.Mesh(icosaGeo, wireMat.clone());
    icosa.position.set(14, 6, -10);
    scene.add(icosa);
    objects.push({ mesh: icosa, rx: 0.003, ry: 0.005 });

    const octaGeo = new THREE.OctahedronGeometry(3.5);
    const octa = new THREE.Mesh(octaGeo, wireMat.clone());
    octa.position.set(-15, -5, -8);
    scene.add(octa);
    objects.push({ mesh: octa, rx: 0.006, ry: 0.003 });

    const torusGeo = new THREE.TorusGeometry(4, 1.2, 12, 48);
    const torus = new THREE.Mesh(torusGeo, wireMat.clone());
    torus.position.set(-5, 8, -15);
    scene.add(torus);
    objects.push({ mesh: torus, rx: 0.004, ry: 0.006 });

    const tetraGeo = new THREE.TetrahedronGeometry(3);
    const tetra = new THREE.Mesh(tetraGeo, wireMat.clone());
    tetra.position.set(10, -8, -5);
    scene.add(tetra);
    objects.push({ mesh: tetra, rx: 0.007, ry: 0.004 });

    // ===== CONNECTION LINES =====
    const linesMat = new THREE.LineBasicMaterial({
        color: 0x00CCBB,
        transparent: true,
        opacity: 0.07
    });
    const linesGeo = new THREE.BufferGeometry();
    const linePoints = [];
    for (let i = 0; i < 60; i++) {
        const a = Math.floor(Math.random() * particleCount) * 3;
        const b = Math.floor(Math.random() * particleCount) * 3;
        linePoints.push(positions[a], positions[a + 1], positions[a + 2]);
        linePoints.push(positions[b], positions[b + 1], positions[b + 2]);
    }
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    const lines = new THREE.LineSegments(linesGeo, linesMat);
    scene.add(lines);

    // ===== MOUSE INTERACTION =====
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ===== ANIMATION LOOP =====
    let time = 0;
    const animate = () => {
        time += 0.008;
        requestAnimationFrame(animate);

        particles.rotation.y += 0.0008 + mouseX * 0.0003;
        particles.rotation.x += 0.0004 + mouseY * 0.0003;

        for (const { mesh, rx, ry } of objects) {
            mesh.rotation.x += rx;
            mesh.rotation.y += ry;
            mesh.position.y += Math.sin(time + mesh.position.x) * 0.005;
        }

        lines.rotation.y = particles.rotation.y;
        lines.rotation.x = particles.rotation.x;

        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };
    animate();

    // ===== RESIZE HANDLER =====
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    console.log('✅ 3D Background initialized!');
})();