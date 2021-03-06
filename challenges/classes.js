// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }

//   const cuboid = new CuboidMaker(4, 5, 5);

  class ClassCuboidMaker{
      constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
      }
      volume(){
        return this.length * this.width * this.height;
      }
      surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }

  const classCuboid = new ClassCuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(classCuboid.volume()); // 100
console.log(classCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends ClassCuboidMaker{
    constructor(object){
        super(object);
    }
    cubeVolume(){
        return this.length * this.width * this.height;
    }
    cubeSurfaceArea(){
        return 6 * (this.length * this.width);
    }
}

const cubeOne = new CubeMaker(4, 4, 4);

console.log(cubeOne);
console.log(cubeOne.cubeVolume());
console.log(cubeOne.cubeSurfaceArea());