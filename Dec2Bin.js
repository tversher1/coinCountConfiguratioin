var $lowestCoinCount = 99999;
var $offset;
//var $binaryCount = $coinCount.toString(2);
//if ($coinCount) {
// alert ("The coin count " + $coinCount + " is " + $binaryCount + " in binary.");
//};
//for (i=1; i<=$binaryCount.length; i++){
// alert ("The coin space " + i + " is: " + $binaryCount.charAt(i-1));
//};
function lowestValue(x){
  if (Number.isInteger(x)) {
console.log(x);
    if ($lowestCoinCount>x){
            $lowestCoinCount=x;
            console.log("Alert. New min is: "+$lowestCoinCount);
        }
    else {
      console.log("No Minimum yet. Current min is: "+$lowestCoinCount);
    }
  }
  else {
    console.log("Not a number." + x);
  }
  return true;
}
function ConfigureSwitches(){
console.log('hello');
var $machineConfig = [];
$lowestCoinCount = 99999;
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
  console.log("Lowest Value is: " + $lowestCoinCount);
}
