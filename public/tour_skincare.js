// Create the scene
const scene = new THREE.Scene();

// Load textures
const textureLoader = new THREE.TextureLoader();
const soilTexture = textureLoader.load('TCom_Ground_Soil3_header.jpg');
soilTexture.wrapS = THREE.RepeatWrapping;
soilTexture.wrapT = THREE.RepeatWrapping;
soilTexture.repeat.set(20, 20);

const grassTexture = textureLoader.load('Grass004_4K-JPG/Grass004_4K-JPG_Color.jpg');
grassTexture.wrapS = THREE.RepeatWrapping;
grassTexture.wrapT = THREE.RepeatWrapping;
grassTexture.repeat.set(20, 20);

// Load sky texture for background
const skyTexture = textureLoader.load('sky.jpg');
scene.background = skyTexture;

// Create the thin soil plane in the middle
const soilMaterial = new THREE.MeshStandardMaterial({ map: soilTexture });
const soilGeometry = new THREE.PlaneGeometry(10, 500);
const soilPlane = new THREE.Mesh(soilGeometry, soilMaterial);
soilPlane.rotation.x = -Math.PI / 2;
soilPlane.position.set(0, 0, -30);
scene.add(soilPlane);

// Create grass for the left side of the soil lane
const grassMaterial = new THREE.MeshBasicMaterial({ map: grassTexture });
const grassGeometry = new THREE.PlaneGeometry(30, 500);
const grassLeft = new THREE.Mesh(grassGeometry, grassMaterial);
grassLeft.rotation.x = -Math.PI / 2;
grassLeft.position.set(-20, 0, -30);
scene.add(grassLeft);

// Create grass for the right side of the soil lane
const grassRight = new THREE.Mesh(grassGeometry, grassMaterial);
grassRight.rotation.x = -Math.PI / 2;
grassRight.position.set(20, 0, -30);
scene.add(grassRight);

// Loaders for additional 3D models (bench, streetlight, fountain)
const loader = new THREE.GLTFLoader();

// Load bench model on the left side grass
loader.load('models/wooden_bench/scene.gltf', (gltf) => {
    const bench = gltf.scene;
    bench.position.set(10, 0, -40);
    bench.scale.set(0.04, 0.04, 0.04);
    
    // Rotate the model (example: rotate 90 degrees around the X axis)
    bench.rotation.y = Math.PI / 2; // Rotating by 90 degrees

    scene.add(bench);
});


// Load streetlight model on the left side grass, below the bench
loader.load('models/street_light/scene.gltf', (gltf) => {
    const streetlight = gltf.scene;
    streetlight.position.set(-10, 0, -50);
    streetlight.scale.set(1, 1.5, 1);
    scene.add(streetlight);
});

// Load fountain model on the right side grass
loader.load('models/street_light/scene.gltf', (gltf) => {
    const streetlight = gltf.scene;
    streetlight.position.set(-10, 0, -5);
    streetlight.scale.set(1, 1.5, 1);
    scene.add(streetlight);
});

// Load bench model on the right side grass, below the fountain
loader.load('models/wooden_bench/scene.gltf', (gltf) => {
    const bench = gltf.scene;
    bench.position.set(10, 0, 5);
    bench.scale.set(0.04, 0.04, 0.04);
    
    // Rotate the model (example: rotate 90 degrees around the X axis)
    bench.rotation.y = Math.PI / 2; // Rotating by 90 degrees

    scene.add(bench);
});

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 30);

// Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('tour-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Plants (already loaded into left and right positions)
const plants = [];

// Load plant models and place them along the soil lane
function loadPlantModel(path, position, scale, name) {
    return new Promise((resolve) => {
        loader.load(path, (gltf) => {
            const plant = gltf.scene;
            plant.position.set(position.x, position.y, position.z);
            plant.scale.set(scale.x, scale.y, scale.z);
            plant.name = name;
            plant.userData.plantName = name; // Store the name in userData
            scene.add(plant);
            plants.push(plant);
            resolve(plant);
        });
    });
}

// Load different plants along the soil lane
const plantLoadPromises = [
    // Left side plants
    loadPlantModel('models/chamomile/scene.gltf', { x: -25, y: 0, z: -30 }, { x: 7, y: 7, z: 7 }, 'Chamomile'),
    loadPlantModel('models/tulsi/scene.gltf', { x: -25, y: 0, z: -15 }, { x: 8, y: 8, z: 8 }, 'Tulsi'),
    loadPlantModel('models/8992b6b94b094a069930104a32d5e9f5/scene.gltf', { x: -25, y: -0.5, z: 0 }, { x: 1, y: 1, z: 1 }, 'Hibiscus'),
    loadPlantModel('models/neem_tree/scene.gltf', { x: -25, y: -0.25, z: 15 }, { x: 0.012, y: 0.012, z: 0.012 }, 'Neem'),

    // Right side plants
    loadPlantModel('models/lavender_vase/scene.gltf', { x: 25, y: 2.5, z: -30 }, { x: 2, y: 2, z: 2 }, 'Lavender'),
    loadPlantModel('models/aloe_vera_plant/scene.gltf', { x: 25, y: 0, z: -15 }, { x: 2, y: 2, z: 2 }, 'Aloe Vera'),
    loadPlantModel('models/dead-nettle_lamium_album_var._barbatum/scene.gltf', { x: 25, y: -0.70, z: 0 }, { x: 1, y: 1, z: 1 }, 'Nettle'),
    loadPlantModel('models/nz_flax/scene.gltf', { x: 25, y: 7, z: 5 }, { x: 1.5, y: 1.5, z: 1.5 }, 'Flax'),
];

// Raycaster for interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Function to handle clicks
function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        let object = intersects[0].object;

        // Traverse up the scene graph to find the root object with the plant name
        while (object.parent && !object.userData.plantName) {
            object = object.parent;
        }

        if (object.userData.plantName) {
            document.getElementById('info-box').innerHTML = `
                <p>Hello!!</p>
                <p>My Name Is ${object.userData.plantName}!!</p>`;
        }
    }
}

// Add event listener for clicks
window.addEventListener('click', onMouseClick);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;

// Add zoom limits
controls.minDistance = 1;  // Minimum zoom distance (how close the camera can get)
controls.maxDistance = 80; // Maximum zoom distance (how far the camera can zoom out)

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // Constraint: Prevent the camera from going below the platform
    const minCameraY = 2; // Adjust this value to your desired minimum height above the platform
    if (camera.position.y < minCameraY) {
        camera.position.y = minCameraY;
    }

    renderer.render(scene, camera);
}

// Start the animation loop once all plants are loaded
Promise.all(plantLoadPromises).then(() => {
    animate();
});

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Start the animation loop once all plants are loaded
Promise.all(plantLoadPromises).then(() => {
    animate();
});