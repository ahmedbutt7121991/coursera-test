(function(window){
var helloSpeaker = {};//object

var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
  	//helloSpeaker.name = name;
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);
