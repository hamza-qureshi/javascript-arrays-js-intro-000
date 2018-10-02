chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray (arr,element){
  var NewArray = [element, ...arr]
  return NewArray
}

function destructivelyAddElementToBeginningOfArray (arr,element){
  return arr.unshift(element)
}