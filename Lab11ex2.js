
var adjectivearray= new Array();
adjectivearray= ["pretty","shiny","happy","sad","ugly"]

var nounarray= new Array();
nounarray=["banana","apple","peach","lemon","cat"]

function first(){
  var adjective = Math.round(Math.random()*4);
  var noun=Math.round(Math.random()*4);

    document.getElementById('output').innerHTML=String(adjectivearray[adjective] + nounarray[noun]);
}
