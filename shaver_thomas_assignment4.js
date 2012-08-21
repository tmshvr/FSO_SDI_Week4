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
    if( obj1[ key ] < obj2[ key ]) {
      return -1;
    }
    else if( obj1[ key ] === obj2[ key ]) {
      return 0;
    };
    return 1;
  },
  dateDifference = function( date1, date2, flag ) {
    var ms, seconds, mins, hours, days;
    date1 = date1.getTime(); // The numerically greater date.
    date2 = date2.getTime(); // The numerically lesser date.
    ms = date1 - date2;
    seconds = ms / 1000;
    mins = seconds / 60;
    hours = mins / 60;
    days = hours / 24;
    return [ formatPrecision( hours + "", 2 ), formatPrecision( days + "", 2 )];
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
    "sortByKey": sortByKey,
    "dateDifference": dateDifference
  };
},

lib = new Library(),
change = {
  "string": "Hello, world!",
  "seperator": ", ",
  "joiner": " "
},
toNum = {"string": "42" },
matchHTTP = { "string": "https://www.fullsail.com" },
matchMail = { "string": "aaa@bbb.ccc" },
matchPhone = { "string": "123-456-7890" },
toTitle = { "string": "s d i" },
formatPrec = { "string": "3.14159", "precision": 2 },
smallestGT = { "list": [ 0, 2, 3, 5, 7, 13, 14, 19 ], "target": 11 },
fuzzyPercent = { "base": 5, "test": 5.5, "range": 0.11 },
sumList = { "list": [ 1, "2", 2, 3, "c", 4, 5, 6, "Seven", 7, 8, 9 ] },
sLBKey = { "list": [ { "a": 2 }, { "a": 3 }, { "a": 1 } ], "key": "a" },
dates = { "list": [ new Date( 2012, 11, 22 ), new Date() ] };

try {
  console.log( change.string + ": " + lib.changeSeperator( change.string, change.seperator, change.joiner ));
  console.log( toNum.string + ": " + lib.stringToNumber( toNum.string ));
  console.log( matchHTTP.string + ": " + lib.matchURL( matchHTTP.string ));
  console.log( matchMail.string + ": " + lib.matchEmail( matchMail.string ));
  console.log( matchPhone.string + ": " + lib.matchPhoneNo( matchPhone.string ));
  console.log( toTitle.string + ": " + lib.toTitleCase( toTitle.string ));
  console.log( formatPrec.string + ", " + formatPrec.precision + ": " + lib.formatPrecision( formatPrec.string, formatPrec.precision ));
  console.log( smallestGT.list + ", target=" + smallestGT.target + ": " + lib.smallestGreaterThan( smallestGT.list, smallestGT.target ));
  console.log( "base=" + fuzzyPercent.base + ", test=" + fuzzyPercent.test + ", range=" + fuzzyPercent.range + ": " +
      lib.fuzzyMatchPercent( fuzzyPercent.base, fuzzyPercent.test, fuzzyPercent.range ) + " " + fuzzyPercent.base + " within " + ((fuzzyPercent.range + "" ).substring(( fuzzyPercent.range + "" ).indexOf( "." ) + 1 ) + "%." ));
  console.log( lib.sumArray( sumList.list ));
  console.log( lib.sortByKey( sLBKey.list, sLBKey.key ));
  console.log( "There are " + lib.dateDifference( dates.list[ 0 ], dates.list[ 1 ], true ).join( " hours, or: " ) + " days. between " +
      dates.list[ 0 ] + " and " + dates.list[ 1 ]);
}
catch( e ) {
 console.log( "Error: " + e.message );
};