/**********
Render/Animate Function
***********
=> Check if sunObj exists
  => Yes: Rotate the sunObj about its Y axis

=> Check if planets exists
  => Yes: Rotate the planets based on their Y axis

=> Check if planets pivots exists
  => Yes: Rotate each pivot about its Y axis, resulting in an orbit around the sun

=> Check if moonObj exists
  => Yes: Rotate the moonObj about its Y axis

=> Check if moonPivot exists
  => Yes: Rotate the moonPivot about its Y axis, resulting in an orbit around the earth

=> Check if any planet is currently being viewed
  => Yes: Update cameraControls.Target to the planet
  => NOTE: This will not be in the AR version of the application

=> Update camera controls
=> Call render
**********/
var render = () => {
  requestAnimationFrame( render );

  //Sun Rotation
  if (sunObj){
    sunObj.rotateY(jsonObj.sun.rotation / jsonObj.rotationScale);
  }

  //Planet Rotation (rad/day)
  for (var i=0; i<jsonObj.numPlanets; i++){
    if (planets[i]){
        planets[i].rotateY(jsonObj.planets[i].rotation / jsonObj.rotationScale);
    }
  }

  //Planet Orbit (rad/day)
  for (var i=0; i<jsonObj.numPlanets; i++){ //will use jsonObj.numElements
    if (pivots[i]){
      pivots[i].rotateY(jsonObj.planets[i].orbit / jsonObj.orbitScale);
    }
  }

  //Moon Rotation (rad/day)
  if (moonObj){
    moonObj.rotateY(jsonObj.planets[2].moon.rotation / jsonObj.rotationScale);
  }

  //Moon Orbit (rad/day)
  if (moonPivot){
    moonPivot.rotateY(jsonObj.planets[2].moon.orbit / jsonObj.orbitScale);
  }

  //NOTE: Wait for AR 
  //traversal
  if (jsonObj.traversal){
    if (jsonObj.sun.beingViewed){
      //Move to sun
    } else if (jsonObj.planets[2].moon.beingViewed){
      //move to moon
    } else {
      for (var i=0; i<jsonObj.numPlanets; i++){
        if (jsonObj.planets[i].beingViewed){
          //move to planet
          cameraTarget = new THREE.Vector3().setFromMatrixPosition(planetTargets[i].matrixWorld);
          cameraControls.target = cameraTarget;
          cameraTraversal(planets[i], i);
        }
      }
    }
  } else {
    //Camera rotation if viewing planet
    //NOTE: this will not be present in the AR build
    // for (var i=0; i<jsonObj.numPlanets; i++){
    //   if (jsonObj.planets[i].beingViewed){
    //     cameraTarget = new THREE.Vector3().setFromMatrixPosition(planetTargets[i].matrixWorld);
    //     cameraControls.target = cameraTarget;
    //
    //   // } else if (jsonObj.planets[2].moon.beingViewed == "true"){
    //   //   cameraTarget = new THREE.Vector3().setFromMatrixPosition(planets[2].matrixWorld);
    //   //   cameraControls.target = cameraTarget;
    //   }
    // }
  }

  //Astronaut
  if(jsonObj.astronaut.rotate) {
    if(jsonObj.astronaut.angle > Math.PI/4) {
      jsonObj.astronaut.rotate = false;
      //textbox here
    } else {
      cameraPivot.rotateY((Math.PI/4)/50);
      jsonObj.astronaut.angle += (Math.PI/4)/50;
    }
  }

  cameraControls.update();

  renderer.render( scene, camera );
};

render();
