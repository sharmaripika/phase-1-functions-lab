// Code your solution in this file!
function distanceFromHqInBlocks(location) {
        
  const blocksAway = Math.abs(location - 42);
  return blocksAway;
}
function distanceFromHqInFeet(someValue){
  const blocks = distanceFromHqInBlocks(someValue);
  const feet = blocks * 264;
  return feet;
}
function  distanceTravelledInFeet(start , destination) {
  const travelInFeet = Math.abs(start-destination)*264;
  return travelInFeet;
}
function calculatesFarePrice(start, destination) {
const distanceInFeet = Math.abs (destination - start)*264;
if (distanceInFeet <= 400){
  return 0;
}
if (distanceInFeet >=400 && distanceInFeet <= 2000){
  return (distanceInFeet-400) * 0.02;
}
if (distanceInFeet >= 2000 && distanceInFeet<= 2500){
  return 25;
}
if (distanceInFeet >=2500) {
  return "cannot travel that far";

}


}
