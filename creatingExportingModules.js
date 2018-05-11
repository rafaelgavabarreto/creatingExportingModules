/*
Create a module that exports a function that takes a number as a parameter and
stores it in a list. The list should not be accessible from outside the module.

Export another function that returns a version of the data list that is sorted
in ascending order. The function you use to sort the data correctly should not be
accessible from outside the module. (Think back to the Custom Sorting Exercise when
handling sorting)

Implement a Node.js script that imports the functionality of your module, adds at
least 5 different data points to the module's data list, and outputs the sorted list.
*/

var library = require('./library');

library.storeList(9);
library.storeList(4);
library.storeList(3);
library.storeList(8);
library.storeList(6);
library.storeList(-1);
library.storeList(0);
console.log(library.sortedDataList());