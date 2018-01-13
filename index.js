function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout("Hello")

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper("Hello")

function sayHiToGrandma(string)(){
  return string("I can\'t hear you!")
}
sayHiToGrandma("hello")
