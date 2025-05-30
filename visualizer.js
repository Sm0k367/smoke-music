// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

// Create bars for the visualizer
const bars = [];
const barCount = 20;
const spacing = 4;
const width = 3;

for (let i = 0; i < barCount; i++) {
    const geometry = new THREE.BoxGeometry(width, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const bar = new THREE.Mesh(geometry, material);
    bar.position.x = (i - barCount / 2) * spacing;
    scene.add(bar);
    bars.push(bar);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Simulate audio data (random heights for demonstration)
    bars.forEach((bar, index) => {
        const scale = 1 + Math.random() * 5;
        bar.scale.y = scale;
    });
    
    renderer.render(scene, camera);
}
animate();

// Position the camera
camera.position.z = 50;
