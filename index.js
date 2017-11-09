// Code your solution in this file!
let numBlocks = 1;

function distanceFromHqInBlocks(numBlocks){
  if(numBlocks > 42){
    return numBlocks - 42;
  } else{
    return 42 - numBlocks;
  }
};


function distanceFromHqInFeet (numBlocks) {
    return distanceFromHqInBlocks(numBlocks) * 264;
};
