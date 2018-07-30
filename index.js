function takeANumber(linenum, name){
  var katzDeliLine = [];
  for (var i = 0; i < linenum.length; i++){
  katzDeliLine.push("Welcome," + name[i] + "You are number" + linenum[i] + "in line.")
  }
  return katzDeliLine;
}