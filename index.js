// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock){
  if(startingBlock) > 42){
    return startingBlock - 42;
  } else{
    return 42 - startingBlock;
  }
};


function distanceFromHqInFeet (startingBlock) {
    return distanceFromHqInBlocks(startingBlock) * 264;
};

function distanceTravelledInFeet(startingBlock, endingBlock){
  if(startingBlock) < endingBlock){
    return (endingBlock - startingBlock)) * 264;
  } else{
    return (startingBlock) - endingBlock) * 264;
  }
};

function calculatesFarePrice(){

};
