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
      var rema = new RegExp( '^[A-z]+@[A-z]{3,}\.[A-z]{2,3}$' );
      return rema.test( string );
  },
  matchPhoneNo = function ( string ) {
      var repn = new RegExp(
        "^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}$"
      );
      return repn.test( string );
  },
  toTitleCase = function( string ) {
    var words = string.split( " " );
    for( var i = 0; i < words.length; i++ ) {
      var ttc = words[ i ].charAt(0);
      ttc = ttc.toUpperCase();
      ttc += words[ i ].substring( 1 );
      words[ i ] = ttc;
    };
    return words.join( " " );
  },
  formatPrecision = function( string, precision ) {
    var imaginary = string.split( "." ), padding = "";
    imaginary[ 1 ] = imaginary[ 1 ].substr( 0, precision );
    if( imaginary[ 1 ].length < precision ) {
      // Add 0's for padding.
      do {
        padding += '0';
      } while( padding.length + imaginary[ 1 ].length <  precision );
    };
    return imaginary.join( "." ) + padding;
  };
  return {
    "changeSeperator": changeSeperator,
    "stringToNumber": stringToNumber,
    "matchURL": matchURL,
    "matchEmail": matchEmail,
    "matchPhoneNo": matchPhoneNo,
    "toTitleCase": toTitleCase,
    "formatDecimalPrecision": formatPrecision
  };
};

var lib = new Library();
try {
  console.log( lib.changeSeperator( "Hello, world!", ", ", " " ));
  console.log( lib.stringToNumber( "42" ));
  console.log( lib.matchURL( "https://www.w3schools.com" ));
  console.log( lib.matchEmail( "aaa@bbb.ccc" ));
  console.log( lib.matchPhoneNo( "123-456-7890" ));
  console.log( lib.toTitleCase( "s d i" ));
  console.log( lib.formatPrecision( "3.14159", 2 ));
}
catch( e ) {
 alert( e.message );
};