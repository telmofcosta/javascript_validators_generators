function NIF() {}
NIF.getCheckDigit = function (nr){
  if (nr.length != 8) return false;

  var controlSum  = 9 * nr.charAt(0) + 8 * nr.charAt(1) + 7 * nr.charAt(2) + 6 * nr.charAt(3) + 5 * nr.charAt(4) + 4 * nr.charAt(5) + 3 * nr.charAt(6) + 2 * nr.charAt(7);
  var controlMod  = controlSum % 11;
  var checkNumber = 11 - controlMod;
  var checkDigit  = (checkNumber > 9 ? 0 : checkNumber);

  return checkDigit;
}

NIF.generate = function(start_input) {
  var value = start_input.length > 8 ? start_input.substring(0,8) : start_input;
  for (i=start_input.length; i<8; i++) {
    value = value.concat(Math.floor(Math.random()*10));
  }
  value = value.concat(NIF.getCheckDigit(value));
  return value;
}

NIF.validate = function(start_input) {
  return start_input == NIF.generate(start_input);
}

