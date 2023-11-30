//Exercise 4
// if (lightBulbStatus === "On") {
//     console.log("Light bulb is On.");
//   } else if (lightBulbStatus === "Off") {
//     console.log("Light bulb is Off.");
//   } else if (lightBulbStatus === "Broken") {
//     console.log("Light bulb is Broken.");
//   } else {
//     console.log("Please choose the correct input (On/Off/Broken)");
//   }
// Switch Statement
//Start coding here
let lightBulbStatus = "Broken";
switch (lightBulbStatus) {
  case "On":
    console.log("Light bulb is On.");
    break;
  case "Off":
    console.log("Light bulb is Off.");
    break;
  case "Broken":
    console.log("Light bulb is Broken.");
    break;
  default:
    console.log("Please choose the correct input (On/Off/Broken)");
}
