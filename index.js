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

function sayHiToGrandma(string){
  if (string.toLowercase() === string){
    return "I can\'t hear you!"
  }elseif (string.toUpperCase() === string){
    return "YES INDEED!"
  }else(string == "I love you, Grandma."){
    return "I love you, too."
  }
}
sayHiToGrandma("hello")
