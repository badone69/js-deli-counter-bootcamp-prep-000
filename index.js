var katzDeliLine = [];

function takeANumber(linenum, name){

  for (var i = 0; i < linenum.length; i++){
  katzDeliLine.push("Welcome," + name[i] + "You are number" + linenum[i] + "in line.")
  }
  return katzDeliLine;
}