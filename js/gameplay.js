import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";

import Fruit from './Fruit.js';
import Papaya from "./Papaya.js";
import Watermelon from "./Watermelon.js";
import Mango from "./Mango.js";

import woodtexture2 from "../assets/img/woodtexture2.jpg"

// Preparation
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load(woodtexture2);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 25);

// const orbit = new OrbitControls(camera, renderer.domElement);
// orbit.update()

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight)

// The main part
let banana = new Fruit(scene, '../assets/models/banana/scene.gltf', 0, -9)
let watermelon = new Watermelon(scene, '../assets/models/watermelon/scene.gltf', 5, -9)
let mango = new Mango(scene, '../assets/models/mango/scene.gltf', -4, -9)

// Finishing
renderer.setAnimationLoop(animate);

function animate(){
    banana.straightThrow()
    watermelon.curveThrow(-10, 0)
    mango.straightThrow()

    renderer.render(scene, camera);
}

// Responsive Canvas
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})