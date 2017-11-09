// Code your solution in this file!
function distanceFromHqInBlocks(origin){
  if(origin > 42){
    return origin - 42;
  } else{
    return 42 - origin;
  }
};


function distanceFromHqInFeet (origin) {
    return distanceFromHqInBlocks(origin) * 264;
};

function distanceTravelledInFeet(origin, destination){
  if(origin < destination){
    return (destination - origin) * 264;
  } else{
    return (origin - destination) * 264;
  }
};

function calculatesFarePrice(){

};
