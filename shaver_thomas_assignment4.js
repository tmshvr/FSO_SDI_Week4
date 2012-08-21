//alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 4
// A re-useable library of string, number and array manipulation functions.

var Library = function() {
  var changeSeperator = function( string, seperator1, seperator2 ){
    var str = string.split( seperator1 ), key;
    return str.join( seperator2 );
  },
  stringToNumber = function( string ) {
    var num = parseInt( string );
    if( isNaN( num )) {
      return null;
    };
    return num;
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
      var repn = new RegExp( '^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}$' );
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
  },
  smallestGreaterThan = function( list, num ) {
    var sgt;
    for( var i = 0; i < list.length; i++ ) {
      if( list[ i ] > num && (list[ i ] < sgt || sgt === undefined )) {
        sgt = list[ i ];
      };
    };
    return sgt;
  },
  fuzzyMatchPercent = function( base, test, percent ) {
    var high = base + ( base * percent ), low = base - ( base * percent );
    if( high > test && test > base ) {
      return "above";
    }
    else if( low < test && test < base) {
      return "below";
    };
    return "out of range";
  },
  sumArray = function( list ) {
    var sum = 0;
    for( var i = 0; i < list.length; i++ ) {
      if( typeof( list[ i ]) === typeof( sum )) {
        sum += list[ i ];
      };
    };
    return sum;
  },
  sortByKey = function( list, sortKey ) {
    key = sortKey;
    return list.sort(sBKCallback);
  },
  sBKCallback = function( obj1, obj2 ) {
    if( obj1[ key ] > obj2[ key ]) {
      return 1;
    }
    else if( obj1[ key ] === obj1[ key ]) {
      return 0;
    };
    return -1;
  };
  return {
    "changeSeperator": changeSeperator,
    "stringToNumber": stringToNumber,
    "matchURL": matchURL,
    "matchEmail": matchEmail,
    "matchPhoneNo": matchPhoneNo,
    "toTitleCase": toTitleCase,
    "formatPrecision": formatPrecision,
    "smallestGreaterThan": smallestGreaterThan,
    "fuzzyMatchPercent": fuzzyMatchPercent,
    "sumArray": sumArray,
    "sortByKey": sortByKey
  };
};

var lib = new Library();
try {
  console.log( lib.changeSeperator( "Hello, world!", ", ", " " ));
  console.log( lib.stringToNumber( "42" ));
  console.log( lib.matchURL( "https://www.fullsail.com" ));
  console.log( lib.matchEmail( "aaa@bbb.ccc" ));
  console.log( lib.matchPhoneNo( "123-456-7890" ));
  console.log( lib.toTitleCase( "s d i" ));
  console.log( lib.formatPrecision( "3.14159", 2 ));
  console.log( lib.smallestGreaterThan( [ 0, 2, 3, 5, 7, 13, 14, 19 ], 11 ));
  console.log( lib.fuzzyMatchPercent( 5, 5.5, .11 ));
  console.log( lib.sumArray( [ 1, "2", 2, 3, "c", 4, 5, 6, "Seven", 7, 8, 9 ] ));
  console.log( lib.sortByKey( [ { "a": 2 }, { "a": 3 }, { "a": 1 } ], "a" ));
}
catch( e ) {
 console.log( "Error: " + e.message );
};