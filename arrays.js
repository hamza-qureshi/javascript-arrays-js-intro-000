chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray (arr,element){
  var NewArray = [element, ...arr]
  return NewArray
}

function destructivelyAddElementToBeginningOfArray (arr,element){
   arr.unshift(element)
   return arr
}

function addElementToEndOfArray (arr,element){
  var NewArray = [...arr , element]
  return NewArray
}

function destructivelyAddElementToEndOfArray (arr,element){
arr.push(element)
return arr
}

function accessElementInArray (arr, index){
return arr[index]
}
