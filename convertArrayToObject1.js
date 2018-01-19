
  var transformFirstAndLast = function (array) {
    var object = {};
    var key = array[0].toString();
    var value = array[array.length - 1].toString();
    object[key] = value;
    return object;
  }