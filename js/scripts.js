var joinedMessage = (function(message) {
  var joinedMessage = message.split(" ");
  joinedMessage = joinedMessage.join("");
  joinedMessage = joinedMessage.replace(/[.,-\/#!$%\^&\*;:{}'=\-_`~()]/g,"");
  return joinedMessage;
});

var stringMath = (function(joinedMessages) {
  var joinedMessages = joinedMessage(joinedMessages);
  var messageLength = joinedMessages.length;
  var sqrtValue = Math.ceil(Math.sqrt(messageLength));
  var rowNum = Math.ceil(messageLength/sqrtValue);
  rowNum = rowNum + 1;
  return[rowNum, sqrtValue, messageLength];
});

var cryptonite = (function(message) {
  var joinMessages = joinedMessage(message);
  var stringedMath = stringMath(joinMessages);
  var rowNum = stringedMath[0];
  var sqrtValue = stringedMath[1];
  var messageLength = stringedMath[2];
  var colNum = rowNum - 1;
  var rowCol = new Array();
  var idx = 0;
  var finalArr = new Array();

  for(var i = 0; i < rowNum; i++) {
    rowCol.push( [] );
  };

  for (var i = 0; i < rowNum ; i++) {

    for (var j = 0; j < colNum; j++) {
        rowCol[i].push(joinMessages.charAt(idx));
        idx++;
    };
  };

  idx = 0;

  for(var i = 0; i < colNum; i++) {
    finalArr.push( [] );
  };

  for (var i = 0; i < colNum ; i++) {

    for (var j = 0; j < rowNum; j++) {
        finalArr[i].push(rowCol[j][i]);
        idx++;
    };
  };


  var mergedArr = new Array();

  mergedArr = mergedArr.concat.apply(mergedArr, finalArr, " ");


  return mergedArr.join("");
});

$(document).ready(function(){

  $("form#crypto").submit(function(event) {
    var message = $("input#crypto").val();
    var result = cryptonite(message);
    // $("#result").show(); //css
    //
    // $("#number").text(result); //
    event.preventDefault();


  });
});


//
//     var result = factorials(number);
//     $("#result").show(); //css
//
//     $("#number").text(result); //
//     event.preventDefault();
//
// var factorials = function(number) {
//   var result = 1;
//   for (var i = 1; i <= number; i++) {
//      if (number === 0) {
//        result;
//      }
//      else if (number !== 0) {
//        result = i * result;
//      }
//   }
//
//   return result;
// };
//
//
