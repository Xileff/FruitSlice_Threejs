import * as THREE from "three";
import texWood from "../assets/img/woodtexture.jpg";
import genshin from "../assets/img/genshin.jpg";
import texMelon from "../assets/img/melon.jpg"
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Preparation
const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 25);
orbit.update()

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight)

// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(texWood)

// The main part
const loader = new GLTFLoader();

// Load 3d model
let banana;
loader.load('../assets/models/banana/scene.gltf', function(gltf) {
    scene.add(gltf.scene)
    // banana = gltf.scene
}, undefined, function(error){
    console.error(error)
});

// const melon = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({map: textureLoader.load(texMelon)}))
// scene.add(melon)




// Finishing
renderer.setAnimationLoop(animate);

function animate(){
    renderer.render(scene, camera);
}

// Responsive Canvas
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})