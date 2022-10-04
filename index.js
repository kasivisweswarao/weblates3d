import * as THREE from './three.js-master/three.js-master/build/three.module.js'

const canvas = document.querySelector('.webgl')
const sceene = THREE.sceene()


const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color: 'red'
})
const boxMesh = new THREE.Mesh(geometry,material)
sceene.add(boxmesh)
//Boiler Plate Code
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
sceene.add(camera)

const renderer = new THREE.webGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.main(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true