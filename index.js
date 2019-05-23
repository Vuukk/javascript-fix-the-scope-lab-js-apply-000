

function myAnimal() {
  var animal = 'dog'
 return animal
}
function yourAnimal() {
 var animal = 'cat'
  return animal
}
function add2(n) {
var two = 2
 return n + two
}

  var funkyFunction = function outsideFunction() {
    return function insideFunction() {
      return 'Funky!'
    }
  }
console.log(funkyFunction())