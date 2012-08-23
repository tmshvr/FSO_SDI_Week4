//alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 4
// A re-useable library of string, number and array manipulation functions.

var Library = function() {
  var changeSeperator = function( string, seperator1, seperator2 ){
    // The replace method of the String object will replace all occurences of seperator1 with seperator2.
    return string.replace( seperator1, seperator2 );
  },
  stringToNumber = function( string ) {
    // parseInt looks at it's argument from start to finish and returns all of the numbers from the start
    // to the end, or from the start to the character before the first non-number in it's argument.
    var num = parseInt( string );
    if( isNaN( num )) { // If the value is Not a Number: (argument probably didn't start with a number)
      num = null;
    };
    return num;
  },
  matchURL = function( string ) {
    // Match a string that can start with http:// or https://, and then can contain www., and then a domain
    // that can be the characters a-z, 0-9, dot (.), and dash (-), one or more times. After the domain,
    // there can be one or more combinations of a period and then 2-3 characters from a-z.
    var remu = new RegExp( "^[(http|https):\/\/]?(www\.)?[a-z0-9\.\-\/]+(\.[a-z]{2,3})+");
    return remu.test( string );
  },
  matchEmail = function( string ) {
    // Match a string starting with at least 3 characters from A-Z a-z, 0-9, dot (.) underscore (_) and
    // dash (-) , one or more times, and then an @ symbol, and then a domain that can be one or more sets
    // of the characters a-z, 0-9, dot (.), and dash (-). The domain is followed by a period and one or
    // sets of characters a-z, which can be repeated.
      var rema = new RegExp( '^[A-z0-9\.\_\-]{3,}@[A-z\.\-]+(\.[a-z]{2,3})+$' );
      return rema.test( string );
  },
  matchPhoneNo = function ( string ) {
    // Match a string starting with 3 numbers 0-9, followed by a dash (-), followed by 3 more numbers 0-9,
    // followed by a dash (-) and then 3 more numbers 0-9.
      var repn = new RegExp( '^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}$' );
      return repn.test( string );
  },
  toTitleCase = function( string ) {
    var words = string.split( " " ); // Split the argument into single words.
    for( var i = 0; i < words.length; i++ ) { // For each of the words in the words array:
      var ttc = words[ i ].charAt(0); // Get the first character in the word,
      ttc = ttc.toUpperCase(); // and change it to uppercase,
      ttc += words[ i ].substring( 1 ); // and make it the first letter of the word.
      words[ i ] = ttc; // and put the word with the capitalized first letter into the words array.
    };
    return words.join( " " );
  },
  formatPrecision = function( string, precision ) {
    // Split the number into two parts: before and after the decimal point,
    var imaginary = string.split( "." ), padding = "";
    // and then get the numbers from after the decimal point up to precision.
    imaginary[ 1 ] = imaginary[ 1 ].substr( 0, precision );
    // If the number is shorter than the requested precision,
    if( imaginary[ 1 ].length < precision ) {
      // then add 0's for padding.
      do {
        padding += '0';
      } while( padding.length + imaginary[ 1 ].length <  precision ); // until precision is met.
    };
    return imaginary.join( "." ) + padding;
  },
  smallestGreaterThan = function( list, num ) {
    var sgt;
    for( var i = 0; i < list.length; i++ ) { // Look through all of the values in the list argument,
      // and if the value is greater than the requested number, and is also either less than the smallest
      // number we found that was greater than the num arg or we've not yet found a number greater than
      // the num arg, then store the value of this element.
      if( list[ i ] > num && (list[ i ] < sgt || sgt === undefined )) { // *** Assignment 2 - OR operator ***
        sgt = list[ i ];
      };
    };
    return sgt; // return the last number found to fit the requirements of the conditions.
  },
  fuzzyMatchPercent = function( base, test, percent ) {
    var high = base + ( base * percent ), // The highest the test value can be.
        low = base - ( base * percent ); // The lowest the test value can be.
    if( test > base && high > test ) {
      return "above"; // The test value is higher than the base, but within the percentage.
    }
    else if( test < base && low < test ) {
      return "below"; // The test value is lower than the base, but within the percentage.
    };
    return "out of range";   // The test value is too low or too high to be within the percentage.
  },
  sumArray = function( list ) {
    var sum = 0; // The total of all the number values in the array.
    for( var i = 0; i < list.length; i++ ) { // Look at each value in the list argument,
      if( typeof( list[ i ]) === typeof( sum )) { // and if it is a number
        sum += list[ i ]; // then add it to the total.
      };
    };
    return sum;
  },
  sortByKey = function( list, sortKey ) {
    key = sortKey;
    // Call the Array.sort method with a callback function used to define a custom sorting algorithm.
    return list.sort(sBKCallback);
  },
  sBKCallback = function( obj1, obj2 ) {
    if( obj1[ key ] < obj2[ key ]) { // If the number in obj1[ key ] is less than that in obj2[ key ]
      return -1; // Then obj1 has priority in the sort.
    }
    else if( obj1[ key ] === obj2[ key ]) { // If the number in obj1[ key ] is equal to that in obj2[ key ]
      return 0; // Then both have the same priority in the sort.
    };
    return 1; // At this point, the number in obj2[ key ] is greater than that in obj1[ key ], and obj2 gets priority.
  },
  dateDifference = function( date1, date2 ) {
    // date1 is the numerically greater date; date2 is numerically lesser.
    var ms, seconds, mins, hours, days;
    date1 = date1.getTime(); // Sets date1 to the date in milliseconds.
    date2 = date2.getTime();
    ms = date1 - date2;
    seconds = ms / 1000; // 1000 ms to a second.
    mins = seconds / 60; // 60 seconds to a minute.
    hours = mins / 60; // 60 mins to an hour.
    days = hours / 24; // 24 hours to a day.
    // Return an array of whole number values of the number of hours and days between the dates.
    return [ Math.floor( hours ), Math.floor( days )];
  };
  return { // Public methods available to code outside of the Library object.
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
}, // EOF Library.

// var statement that instantiated Library is still going

lib = new Library(),
change = {
  "string": "Hello, world!",
  "seperator": ", ",
  "joiner": " "
},
toNum = {"string": "42" },
matchHTTP = { "string": "https://www.fullsail.com" },
matchMail = { "string": "aaa_.-@bbb.ccc.ddd" },
matchPhone = { "string": "123-456-7890" },
toTitle = { "string": "s d i" },
formatPrec = { "string": "3.14159", "precision": 10 },
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
  console.log( lib.sortByKey( sLBKey.list, sLBKey.key )); // *** Assignment 2 - Output of array ***
  console.log( "There are " + lib.dateDifference( dates.list[ 0 ], dates.list[ 1 ], true ).join( " hours, or: " ) + " days. between " +
      dates.list[ 0 ] + " and " + dates.list[ 1 ]);
}
catch( e ) {
 console.log( "Error: " + e.message );
};