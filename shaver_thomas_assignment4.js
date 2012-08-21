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
  },
  matchURL = function( string ) {
    var remu = new RegExp( "^(http:|https:)");
    return remu.test( string );
  },
  matchEmail = function( string ) {
      var rema = new RegExp( "^[\w_\.\-]+@[A-Za-z]{3,}\.[A-Za-z]{2,3}$");
      return rema.test( string );
  };
  return {
    "changeSeperator": changeSeperator,
    "stringToNumber": stringToNumber,
    "matchURL": matchURL,
    "matchEmail": matchEmail
  };
};

var lib = new Library();
try {
  console.log( lib.changeSeperator( "Hello, world", ", ", " " ));
  console.log( lib.stringToNumber( "42" ));
  console.log( lib.matchURL( "https://www.w3schools.com" ));
  console.log( lib.matchEmail( "aaa@bbb.ccc" ));
}
catch( e ) {
 alert( e.message );
};