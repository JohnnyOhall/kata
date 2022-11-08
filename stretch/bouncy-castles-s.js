// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = radius => {
  const vol = (4/3)*PI*(radius ** 3);
  return vol;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
  const vol = (1/3)*PI*(radius ** 2)*height;
  return vol;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => {
  const vol = (width*depth*height);
  return vol;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  total = 0;

  for (obj of solids){
    if (obj.type === "sphere"){
      total += sphereVolume(obj.radius)
    } else if (obj.type === "cone") {
      total += coneVolume(obj.radius,obj.height)
    } else if (obj.type === "prism"){
      total += prismVolume(obj.height,obj.width,obj.depth)
    }
  }

  return total;
}


// TEST CASES //
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);