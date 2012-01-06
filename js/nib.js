function NIB() {}
NIB.getCheckDigit = function(nr){

  if (nr.length != 19) return false;

  var weightTable = [73,17,89,38,62,45,
                      53,15,50, 5,49,34,
                      81,76,27,90, 9,30,
                       3,10, 1]
  var controlSum = 0;
  for (var i=0; i < 19; i++) {
    var digit = nr.charAt(i)
    var weight = weightTable[i];
    controlSum += (digit * weight);
  }

  var controlMod = controlSum % 97;
  var checkNumber = 98 - controlMod;
  var checkSum = checkNumber < 10 ? "0" + checkNumber : checkNumber.toString();

  return checkSum;
}
NIB.generate = function(start_input) {
  var value = start_input.length > 19 ? start_input.substring(0,19) : start_input;
  for (i=start_input.length; i<19; i++) {
    value = value.concat(Math.floor(Math.random()*10));
  }
  value = value.concat(NIB.getCheckDigit(value));
  return value;
}
NIB.validate = function(start_input) {
  return start_input == NIB.generate(start_input);
}



