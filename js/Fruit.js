import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

class Fruit {
    xMax = 8;
    xMin = -8;
    yMax = 8;
    yMin = -8;

    gltf;

    gravity = 0.08;
    alreadyHitTop = false;

    constructor(scene, url, initialXPos, initialYPos){
        new GLTFLoader().load(url, gltf => {
            this.gltf = gltf

            this.gltf.scene.position.x = initialXPos;
            this.gltf.scene.position.y = initialYPos;
            scene.add(gltf.scene)
        })
    }

    curveThrow(xDestination, yDestination){
        if(this.gltf == undefined) return

        if(this.gltf.scene.position.x != xDestination && this.yDestination != yDestination){
            // Vertical
            if(!this.alreadyHitTop){
                this.gltf.scene.position.y += this.gravity
                if(this.gltf.scene.position.y >= this.yMax){
                    this.alreadyHitTop = true;
                }
            }
    
            else {
                this.gltf.scene.position.y -= this.gravity;
                if(this.gltf.scene.position.y <= this.yMin){
                    
                }
            }
            

            // Horizontal
            if(this.gltf.scene.position.x < xDestination){
                this.gltf.scene.position.x += this.gravity
            }

            else if(this.gltf.scene.position.x > xDestination){
                this.gltf.scene.position.x -= this.gravity
            }
        }
    }

    straightThrow(){
        if(this.gltf == undefined) return

        if(!this.alreadyHitTop){
            this.gltf.scene.position.y += this.gravity
            if(this.gltf.scene.position.y >= this.yMax){
                this.alreadyHitTop = true;
            }
        }

        else {
            this.gltf.scene.position.y -= this.gravity;
            if(this.gltf.scene.position.y <= this.yMin){
                this.alreadyHitTop = false;
            }
        }
    }
}

export default Fruit;