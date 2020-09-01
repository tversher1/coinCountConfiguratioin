var $lowestCoinCount = 99999;
var $highestCoinCount = 0;
var $offset;
var $coinsAfterOffset=[];
var $offsetBinaryCount;
var $switchSet1, $switchSet2, $switchSet3, $switchSet4, $switchSet5, $switchSet6, $switchSet7, $offsetSwitches = [];
var $switches = [$switchSet1, $switchSet2, $switchSet3, $switchSet4, $switchSet5, $switchSet6, $switchSet7];

//if ($coinCount) {
// alert ("The coin count " + $coinCount + " is " + $binaryCount + " in binary.");
//};
//for (i=1; i<=$binaryCount.length; i++){
// alert ("The coin space " + i + " is: " + $binaryCount.charAt(i-1));
//};

//Clears the form to default values
function ClearForm(){
  document.getElementById("coinData").reset();
}

//Sets the offset count by pulling the integer value of $lowestCoinCount/4 then multiplying it by 4.
function setOffset(x){
  $offsetBinaryCount = Number.parseInt(x/4).toString(2);
  switch (Number.parseInt(x/4)) {
    case 0:{
      $offsetSwitches = ["ON","ON","ON","ON"];
      break;
    }
    case 1:{
      $offsetSwitches = ["OFF","ON","ON","ON"];
      break;
    }
    case 2:{
      $offsetSwitches = ["ON","OFF","ON","ON"];
      break;
    }
    case 3:{
      $offsetSwitches = ["OFF","OFF","ON","ON"];
      break;
    }
    case 4:{
      $offsetSwitches = ["ON","ON","OFF","ON"];
      break;
    }
    case 5:{
      $offsetSwitches = ["OFF","ON","OFF","ON"];
      break;
    }
    case 6:{
      $offsetSwitches = ["ON","OFF","OFF","ON"];
      break;
    }
    case 7:{
      $offsetSwitches = ["OFF","OFF","OFF","ON"];
      break;
    }
    case 8:{
      $offsetSwitches = ["ON","ON","ON","OFF"];
      break;
    }
    case 9:{
      $offsetSwitches = ["OFF","ON","ON","OFF"];
      break;
    }
    case 10:{
      $offsetSwitches = ["ON","OFF","ON","OFF"];
      break;
    }
    case 11:{
      $offsetSwitches = ["OFF","OFF","ON","OFF"];
      break;
    }
    case 12:{
      $offsetSwitches = ["ON","ON","OFF","OFF"];
      break;
    }
    case 13:{
      $offsetSwitches = ["OFF","ON","OFF","OFF"];
      break;
    }
    case 14:{
      $offsetSwitches = ["ON","OFF","OFF","OFF"];
      break;
    }
    case 15:{
      $offsetSwitches = ["OFF","OFF","OFF","OFF"];
      break;
    }
    default:

  }
  return 4*(Number.parseInt(x/4));
}

//Find the number of additionalCoins needed after the Offset
function additionalCoins(x){
  if (Number.isInteger(x)){
    $coinsAfterOffset.push(x-$offset);
  }
  else {
    $coinsAfterOffset.push(x);
  }
  return true;
}

//Finds the lowestValue from the array of inputs
function lowestValue(x){
  if (Number.isInteger(x)) {
//console.log(x);
    if ($lowestCoinCount>x){
            $lowestCoinCount=x;
//            console.log("Alert. New min is: "+$lowestCoinCount);
        }
//    else {
//      console.log("No Minimum yet. Current min is: "+$lowestCoinCount);
//    }
  }
//  else {
//    console.log("Not a number." + x);
//  }
  return true;
}

//Finds the highestValue from the array of inputs
function highestValue(x){
  if (Number.isInteger(x)) {
//console.log(x);
    if ($highestCoinCount<x){
            $highestCoinCount=x;
//            console.log("Alert. New min is: "+$lowestCoinCount);
        }
//    else {
//      console.log("No Minimum yet. Current min is: "+$lowestCoinCount);
//    }
  }
//  else {
//    console.log("Not a number." + x);
//  }
  return true;
}

//Set formula to the binary output
function setFormulaCoins(x){
  switch (x) {
    case 0:{
      return ["ON","ON","ON","ON","ON"];
      break;
    }
    case 1:{
      return ["OFF","ON","ON","ON","ON"];
      break;
    }
    case 2:{
      return ["ON","OFF","ON","ON","ON"];
      break;
    }
    case 3:{
      return ["OFF","OFF","ON","ON","ON"];
      break;
    }
    case 4:{
      return ["ON","ON","OFF","ON","ON"];
      break;
    }
    case 5:{
      return ["OFF","ON","OFF","ON","ON"];
      break;
    }
    case 6:{
      return ["ON","OFF","OFF","ON","ON"];
      break;
    }
    case 7:{
      return ["OFF","OFF","OFF","ON","ON"];
      break;
    }
    case 8:{
      return ["ON","ON","ON","OFF","ON"];
      break;
    }
    case 9:{
      return ["OFF","ON","ON","OFF","ON"];
      break;
    }
    case 10:{
      return ["ON","OFF","ON","OFF","ON"];
      break;
    }
    case 11:{
      return ["OFF","OFF","ON","OFF","ON"];
      break;
    }
    case 12:{
      return ["ON","ON","OFF","OFF","ON"];
      break;
    }
    case 13:{
      return ["OFF","ON","OFF","OFF","ON"];
      break;
    }
    case 14:{
      return ["ON","OFF","OFF","OFF","ON"];
      break;
    }
    case 15:{
      return ["OFF","OFF","OFF","OFF","ON"];
      break;
    }
    case 16:{
      return ["ON","ON","ON","ON","OFF"];
      break;
    }
    case 17:{
      return ["OFF","ON","ON","ON","OFF"];
      break;
    }
    case 18:{
      return ["ON","OFF","ON","ON","OFF"];
      break;
    }
    case 19:{
      return ["OFF","OFF","ON","ON","OFF"];
      break;
    }
    case 20:{
      return ["ON","ON","OFF","ON","OFF"];
      break;
    }
    case 21:{
      return ["OFF","ON","OFF","ON","OFF"];
      break;
    }
    case 22:{
      return ["ON","OFF","OFF","ON","OFF"];
      break;
    }
    case 23:{
      return ["OFF","OFF","OFF","ON","OFF"];
      break;
    }
    case 24:{
      return ["ON","ON","ON","OFF","OFF"];
      break;
    }
    case 25:{
      return ["OFF","ON","ON","OFF","OFF"];
      break;
    }
    case 26:{
      return ["ON","OFF","ON","OFF","OFF"];
      break;
    }
    case 27:{
      return ["OFF","OFF","ON","OFF","OFF"];
      break;
    }
    case 28:{
      return ["ON","ON","OFF","OFF","OFF"];
      break;
    }
    case 29:{
      return ["OFF","ON","OFF","OFF","OFF"];
      break;
    }
    case 30:{
      return ["ON","OFF","OFF","OFF","OFF"];
      break;
    }
    case 31:{
      return ["OFF","OFF","OFF","OFF","OFF"];
      break;
    }
    default:
  }
}

//sets each switch to on or off based on the parameter passed
function setSwitch(x){
  if (x){
    return "ON";
  }
  else{
    return "OFF";
  }
}

//sets the configuration for the switches based on the input form coinData
function ConfigureSwitches(){
var $machineConfig = [];

//Sets default values for variables that will change.
$lowestCoinCount = 99999;
$highestCoinCount = 0;
$coinsAfterOffset.length=0;

  for (i=0; i+1<document.getElementsByName('coinData')[0].length; i++){
    var $type=document.getElementsByName('coinData')[0][i].type;

    switch ($type) {
      case "checkbox":
        var $checked = document.getElementsByName('coinData')[0][i].checked;
        console.log('Data point ' + (i+1) + ': ' + $checked);
        $machineConfig.push($checked);
        break;
      case "number":
        var $value = document.getElementsByName('coinData')[0][i].value;
        console.log('Data point ' + (i+1) + ': ' + $value);
        $machineConfig.push(parseInt($value));
        break;
      default:

    }
    console.log('Data point ' + (i+1) + ': ' + document.getElementsByName('coinData')[0][i].value + " " + $type);
  }
  console.log($machineConfig);
  console.log($machineConfig.length);
  $machineConfig.every(lowestValue);
  $machineConfig.every(highestValue);
  if ($highestCoinCount - $lowestCoinCount < 31){
    alert ("The coins must be within 31 coins of the highest and lowest values.");
    return;
  }
  console.log("Lowest Value is: " + $lowestCoinCount);
  console.log("Highest Value is: " + $highestCoinCount);
  $offset=setOffset($lowestCoinCount);
  console.log("Offset value is: " + $offset);
  $machineConfig.every(additionalCoins);
  console.log($coinsAfterOffset);
  console.log($offsetBinaryCount);

  //sets switchbank 1
  $switchSet1=setFormulaCoins($coinsAfterOffset[0]);
  console.log($switchSet1);
  document.getElementById("s1-6").innerHTML = setSwitch($coinsAfterOffset[7]);
  document.getElementById("s1-5").innerHTML = $switchSet1[4];
  document.getElementById("s1-4").innerHTML = $switchSet1[3];
  document.getElementById("s1-3").innerHTML = $switchSet1[2];
  document.getElementById("s1-2").innerHTML = $switchSet1[1];
  document.getElementById("s1-1").innerHTML = $switchSet1[0];

  //sets switchbank 2
  $switchSet2=setFormulaCoins($coinsAfterOffset[1]);
  console.log($switchSet2);
  document.getElementById("s2-6").innerHTML = setSwitch($coinsAfterOffset[8]);
  document.getElementById("s2-5").innerHTML = $switchSet2[4];
  document.getElementById("s2-4").innerHTML = $switchSet2[3];
  document.getElementById("s2-3").innerHTML = $switchSet2[2];
  document.getElementById("s2-2").innerHTML = $switchSet2[1];
  document.getElementById("s2-1").innerHTML = $switchSet2[0];

  //sets switchbank 3
  $switchSet3=setFormulaCoins($coinsAfterOffset[2]);
  console.log($switchSet3);
  document.getElementById("s3-6").innerHTML = $offsetSwitches[0];
  document.getElementById("s3-5").innerHTML = $switchSet3[4];
  document.getElementById("s3-4").innerHTML = $switchSet3[3];
  document.getElementById("s3-3").innerHTML = $switchSet3[2];
  document.getElementById("s3-2").innerHTML = $switchSet3[1];
  document.getElementById("s3-1").innerHTML = $switchSet3[0];

  //sets switchbank 4
  $switchSet4=setFormulaCoins($coinsAfterOffset[3]);
  console.log($switchSet4);
  document.getElementById("s4-6").innerHTML = $offsetSwitches[1];
  document.getElementById("s4-5").innerHTML = $switchSet4[4];
  document.getElementById("s4-4").innerHTML = $switchSet4[3];
  document.getElementById("s4-3").innerHTML = $switchSet4[2];
  document.getElementById("s4-2").innerHTML = $switchSet4[1];
  document.getElementById("s4-1").innerHTML = $switchSet4[0];

  //sets switchbank 5
  $switchSet5=setFormulaCoins($coinsAfterOffset[4]);
  console.log($switchSet5);
  document.getElementById("s5-6").innerHTML = $offsetSwitches[2];
  document.getElementById("s5-5").innerHTML = $switchSet5[4];
  document.getElementById("s5-4").innerHTML = $switchSet5[3];
  document.getElementById("s5-3").innerHTML = $switchSet5[2];
  document.getElementById("s5-2").innerHTML = $switchSet5[1];
  document.getElementById("s5-1").innerHTML = $switchSet5[0];

  //sets switchbank 6
  $switchSet6=setFormulaCoins($coinsAfterOffset[5]);
  console.log($switchSet6);
  document.getElementById("s6-6").innerHTML = $offsetSwitches[3];
  document.getElementById("s6-5").innerHTML = $switchSet6[4];
  document.getElementById("s6-4").innerHTML = $switchSet6[3];
  document.getElementById("s6-3").innerHTML = $switchSet6[2];
  document.getElementById("s6-2").innerHTML = $switchSet6[1];
  document.getElementById("s6-1").innerHTML = $switchSet6[0];

  //sets switchbank 7
  $switchSet7=setFormulaCoins($coinsAfterOffset[6]);
  console.log($switchSet7);
  document.getElementById("s7-6").innerHTML = "OFF";
  document.getElementById("s7-5").innerHTML = $switchSet7[4];
  document.getElementById("s7-4").innerHTML = $switchSet7[3];
  document.getElementById("s7-3").innerHTML = $switchSet7[2];
  document.getElementById("s7-2").innerHTML = $switchSet7[1];
  document.getElementById("s7-1").innerHTML = $switchSet7[0];

  //debug Data
  console.log("Offset: "+$offset);
  console.log("Formula 1: "+$coinsAfterOffset[0]);
  console.log("Formula 2: "+$coinsAfterOffset[1]);
  console.log("Formula 3: "+$coinsAfterOffset[2]);
  console.log("Formula 4: "+$coinsAfterOffset[3]);
  console.log("Formula 5: "+$coinsAfterOffset[4]);
  console.log("Formula 6: "+$coinsAfterOffset[5]);
  console.log("Formula 7: "+$coinsAfterOffset[6]);
}
