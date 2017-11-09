// Code your solution in this file!

function distanceFromHqInBlocks(numBlocks){
  if(numBlocks > 42){
    return numBlocks - 42;
  } else{
    return 42 - numBlocks;
  }
};


function distanceFromHqInFeet(){
  distanceFromHqInBlocks() * 264;
};
