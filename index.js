var i = 1

function takeANumber(array) {
  i = i + 1;
  array.push(i)
  return(`Your ticket number is ${i}.`)
}

function nowServing(array) {
  if (array.length === 0) {
    return(`There is nobody waiting to be served!`)
  }
  else {
    return(`Currently serving ${array.shift()}.`);
  }
}

function currentLine(array) {
  if (array.length === 0 ) {
    return(`The line is currently empty.`)
  }
  else {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
      newArray.push(`${i+1}. ${array[i]}`);
    }
    return `The line is currently: ${newArray.join(', ')}`
  }
}