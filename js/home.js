// ======= TYPED ROLES =======
const roles = ['Laravel & Vue Dev_', 'Full Stack Developer_', 'UI/UX Enthusiast_', 'AI & ML Explorer_', 'Creative Coder_'];
let rIdx = 0, cIdx = 0, del = false;
const typedEl = document.getElementById('typed-role');

const typeRole = () => {
  const cur = roles[rIdx];
  if (!del) {
    typedEl.textContent = cur.slice(0, ++cIdx);
    if (cIdx === cur.length) { 
      del = true; 
      setTimeout(typeRole, 1800); 
      return; 
    }
  } else {
    typedEl.textContent = cur.slice(0, --cIdx);
    if (cIdx === 0) { 
      del = false; 
      rIdx = (rIdx + 1) % roles.length; 
    }
  }
  setTimeout(typeRole, del ? 45 : 80);
};
typeRole();

// ======= HERO ENTRANCE ANIMATION =======
window.addEventListener('load', () => {
  ['.hero-eyebrow', '.hero-title', '.hero-role', '.hero-desc', '.hero-cta', '.hero-visual'].forEach((s, i) => {
    const el = document.querySelector(s);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.8s ease ${i * 0.12 + 0.2}s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.12 + 0.2}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50);
  });
});

// ======= MAGNETIC + TILT + FLOAT COMBO =======
const codeWrapper = document.getElementById('codeWrapper');
const codeInner = document.getElementById('codeInner');

codeWrapper.addEventListener('mousemove', (e) => {
  const rect = codeWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -8;
  const rotateY = ((x - centerX) / centerX) * 8;
  const moveX = ((x - centerX) / centerX) * 6;
  const moveY = ((y - centerY) / centerY) * 6;
  
  codeInner.style.animation = 'none';
  codeInner.classList.add('magnetic');
  codeInner.style.transform = `
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    translateX(${moveX}px) 
    translateY(${moveY}px)
  `;
});

codeWrapper.addEventListener('mouseleave', () => {
  codeInner.classList.remove('magnetic');
  codeInner.style.transform = 'rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)';
  codeInner.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => {
    codeInner.style.animation = 'floatBlock 4s ease-in-out infinite';
  }, 700);
});

codeWrapper.addEventListener('mouseenter', () => {
  codeInner.style.transition = 'transform 0.1s ease';
  codeInner.style.animation = 'none';
});

// ======= CODE TYPING ANIMATION =======
// Data kode yang akan ditampilkan
const codeData = [
  { text: 'const developer = {', type: 'keyword' },
  { text: '  name: "Lintang Maharani",', type: 'string' },
  { text: '  role: "Developer",', type: 'string' },
  { text: '  exp: 3 + " years",', type: 'number' },
  { text: '  stack: [', type: 'bracket' },
  { text: '    "React",', type: 'string' },
  { text: '    "Node.js",', type: 'string' },
  { text: '    "PostgreSQL",', type: 'string' },
  { text: '  ],', type: 'bracket' },
  { text: '  hire: () => "Yes! 🚀",', type: 'function' },
  { text: '};', type: 'keyword' },
  { text: '', type: 'empty' },
  { text: '// Currently: Open to work', type: 'comment' },
  { text: 'developer.hire();', type: 'function' },
  { text: '', type: 'empty' },
  { text: '// → "Yes! 🚀"', type: 'comment' },
];

// Class mapping untuk warna
const colorMap = {
  'keyword': 'c-keyword',
  'string': 'c-str',
  'number': 'c-num',
  'bracket': 'c-fn',
  'function': 'c-fn',
  'comment': 'c-comment',
  'empty': ''
};

let isTypingComplete = false;
let currentLineIndex = 0;
let currentCharIndex = 0;
let codeContainer = null;
let isPaused = false;

function initCodeTyping() {
  const codeBlock = document.querySelector('.hero-code-block');
  const dotBar = codeBlock.querySelector('.code-dot-bar');
  
  // Clear everything except dot bar
  codeBlock.innerHTML = '';
  codeBlock.appendChild(dotBar);
  
  // Create container for code lines
  codeContainer = document.createElement('div');
  codeContainer.id = 'codeContainer';
  codeBlock.appendChild(codeContainer);
  
  currentLineIndex = 0;
  currentCharIndex = 0;
  isTypingComplete = false;
  
  startTyping();
}

function startTyping() {
  if (currentLineIndex >= codeData.length) {
    isTypingComplete = true;
    // Reset setelah jeda
    setTimeout(() => {
      resetCodeTyping();
    }, 4000);
    return;
  }
  
  const lineData = codeData[currentLineIndex];
  const lineDiv = document.createElement('div');
  lineDiv.className = 'code-line';
  lineDiv.style.opacity = '1';
  
  // Untuk baris kosong
  if (lineData.type === 'empty') {
    lineDiv.innerHTML = '&nbsp;';
    codeContainer.appendChild(lineDiv);
    currentLineIndex++;
    setTimeout(startTyping, 200);
    return;
  }
  
  // Buat span untuk setiap karakter
  const text = lineData.text;
  const span = document.createElement('span');
  span.className = colorMap[lineData.type] || '';
  lineDiv.appendChild(span);
  codeContainer.appendChild(lineDiv);
  
  let charIndex = 0;
  
  function typeCharacter() {
    if (charIndex < text.length) {
      // Typing effect - tambah karakter satu per satu
      const currentText = text.slice(0, charIndex + 1);
      span.innerHTML = currentText;
      charIndex++;
      
      // Kecepatan typing bervariasi
      const delay = Math.random() * 30 + 20;
      setTimeout(typeCharacter, delay);
    } else {
      // Selesai satu baris
      span.innerHTML = text; // Pastikan full text
      currentLineIndex++;
      setTimeout(startTyping, 300);
    }
  }
  
  typeCharacter();
}

function resetCodeTyping() {
  if (!codeContainer) return;
  
  // Hapus semua line dengan animasi fade out
  const lines = codeContainer.querySelectorAll('.code-line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      line.style.opacity = '0';
      line.style.transform = 'translateY(-10px)';
    }, index * 30);
  });
  
  setTimeout(() => {
    codeContainer.innerHTML = '';
    currentLineIndex = 0;
    currentCharIndex = 0;
    isTypingComplete = false;
    startTyping();
  }, lines.length * 30 + 500);
}

// ======= CLICK ANIMATION (GERAK GERAK) =======
codeWrapper.addEventListener('click', (e) => {
  e.stopPropagation();
  
  // Efek shake/gerak pada code block
  codeInner.style.animation = 'none';
  codeInner.style.transition = 'transform 0.1s ease';
  
  // Gerak ke kiri-kanan (shake)
  let shakeCount = 0;
  const maxShakes = 8;
  
  function doShake() {
    if (shakeCount >= maxShakes) {
      // Kembali ke posisi normal
      codeInner.style.transform = 'rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)';
      setTimeout(() => {
        codeInner.style.animation = 'floatBlock 4s ease-in-out infinite';
      }, 300);
      return;
    }
    
    const direction = shakeCount % 2 === 0 ? 1 : -1;
    const intensity = (maxShakes - shakeCount) / maxShakes * 12;
    codeInner.style.transform = `translateX(${direction * intensity}px) rotate(${direction * 2}deg)`;
    
    shakeCount++;
    setTimeout(doShake, 60);
  }
  
  doShake();
  
  // Highlight baris hire
  if (codeContainer) {
    const lines = codeContainer.querySelectorAll('.code-line');
    lines.forEach(line => {
      const text = line.textContent || '';
      if (text.includes('hire') || text.includes('Yes!')) {
        line.style.transition = 'all 0.3s ease';
        line.style.color = '#00FFEB';
        line.style.textShadow = '0 0 30px rgba(0,255,235,0.8)';
        line.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
          line.style.color = '';
          line.style.textShadow = '';
          line.style.transform = 'scale(1)';
        }, 1200);
      }
    });
  }
  
  // Tambahkan output "Yes! 🚀" dengan animasi
  const outputDiv = document.createElement('div');
  outputDiv.style.cssText = `
    color: #00e5a0;
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    margin-top: 10px;
    padding: 6px 12px;
    border-top: 1px solid rgba(0,255,235,0.15);
    border-radius: 4px;
    background: rgba(0,255,235,0.05);
    animation: slideUp 0.5s ease forwards;
    opacity: 0;
    transform: translateY(10px);
  `;
  outputDiv.innerHTML = `▶ <span style="color: #ffd580;">"Yes! 🚀"</span> (hired!)`;
  outputDiv.className = 'click-output';
  
  const existingOutput = codeInner.querySelector('.click-output');
  if (existingOutput) {
    existingOutput.style.transition = 'all 0.3s ease';
    existingOutput.style.opacity = '0';
    existingOutput.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      existingOutput.remove();
      codeInner.appendChild(outputDiv);
      requestAnimationFrame(() => {
        outputDiv.style.opacity = '1';
        outputDiv.style.transform = 'translateY(0)';
      });
    }, 300);
  } else {
    codeInner.appendChild(outputDiv);
    requestAnimationFrame(() => {
      outputDiv.style.opacity = '1';
      outputDiv.style.transform = 'translateY(0)';
    });
  }
  
  // Hapus output setelah 3 detik
  setTimeout(() => {
    if (outputDiv.parentNode) {
      outputDiv.style.transition = 'all 0.5s ease';
      outputDiv.style.opacity = '0';
      outputDiv.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        outputDiv.remove();
      }, 500);
    }
  }, 3000);
});

// Start setelah page load
window.addEventListener('load', () => {
  setTimeout(initCodeTyping, 1500);
});

// Tambahkan CSS untuk animasi
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .click-output {
    animation: slideUp 0.5s ease forwards;
  }
  
  .code-line {
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(styleSheet);