'use strict';
module.exports = function() {
  var randomNum = Math.random() * 1000000;
  var myNum = function() {
    return randomNum;
  };
  return myNum;
};