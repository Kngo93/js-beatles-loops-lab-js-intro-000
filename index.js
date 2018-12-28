// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var x = 0; x < musicians.length; x++) {
    array.push(musicians[x] + " plays " + instruments[x]);
  }

  return array;
}

function johnLennonFacts(facts) {
  var array = [];

  var x = 0;
  while (x < facts.length) {
    array.push(facts[x] + "!!!");
    x++;
  }

  return array;
}
