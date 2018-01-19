
  
  var fromListToObject = function (array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
       var arr = array[i];
       var key = arr[0];
       var val = arr[arr.length - 1];
       obj[key] = val;
    }
    return obj;
  };

  var actual = JSON.stringify(fromListToObject);
