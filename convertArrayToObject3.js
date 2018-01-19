
function transformEmployeeData(array) {
  var JSONArr = [];
  for (var i = 0; i < array.length; i++) {
    var arr = array[i];
    var JSONObj = fromListToObject(arr);
    JSONArr.push(JSONObj);
  }
  return JSONArr;
}

function fromListToObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
     var arr = array[i];
     var key = arr[0];
     var val = arr[arr.length - 1];
     obj[key] = val;
  }
  return obj;
}