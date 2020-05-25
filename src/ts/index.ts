import * as THREE from 'three';
import * as rustWASM from '../../target/pkg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const main = () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(2, 2, 2);
    
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor("#000000");
    document.body.appendChild( renderer.domElement );
    new OrbitControls( camera, renderer.domElement );

    var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    var cubeMaterial = new THREE.MeshBasicMaterial( { color: rustWASM.get_color() } );
    var cubeMesh = new THREE.Mesh( cubeGeometry, cubeMaterial );
    
    cubeMesh.position.set(1, 1, 1);

    scene.add(cubeMesh);
    scene.add(new THREE.AxesHelper(5));

    const render = () => {

        requestAnimationFrame( render );

        cubeMesh.rotation.x += 0.01337;
        cubeMesh.rotation.y = cubeMesh.rotation.x;

        renderer.render(scene, camera);
    };

    render();
}
export { main };