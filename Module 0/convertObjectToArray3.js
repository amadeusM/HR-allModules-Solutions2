function convertObjectToList(obj) {
  var array = [];
  for (var key in obj) {
    var arr = [];
    arr.push(key);
    arr.push(obj[key]);
    array.push(arr);
  }
  return array;
}