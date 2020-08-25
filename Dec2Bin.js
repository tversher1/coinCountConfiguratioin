var $coinCount = 4;
var $binaryCount = $coinCount.toString(2);
if ($coinCount) {
 alert ("The coin count " + $coinCount + " is " + $binaryCount + " in binary.");
};
for (i=1; i<=$binaryCount.length; i++){
 alert ("The coin space " + i + " is: " + $binaryCount.charAt(i-1));
};