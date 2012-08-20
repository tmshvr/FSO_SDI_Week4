//alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 4
// A re-useable library of string, number and array manipulation functions.

var Library = function() {
  var changeSeperator = function( string, seperator1, seperator2 ){
    var str = string.split( seperator1 );
    return str.join( seperator2 );
  },
  stringToNumber = function( string ) {
    var num = parseInt( string );
    if( isNaN( num )) {
      throw "isNaN: " + string + ".";
    }
    else {
      return num;
    };
  };
  return {
    "changeSeperator": changeSeperator,
    "stringToNumber": stringToNumber
  };
};

var lib = new Library();
try {
  console.log( lib.changeSeperator( "Hello, world", ", ", " " ));
  console.log( lib.stringToNumber( "42" ));
}
catch( e ) {
 alert( e.message );
};