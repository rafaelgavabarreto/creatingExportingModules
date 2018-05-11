list = [];

var storeList = function(newValues) {
  list.push(newValues);
}

var sortedDataList = function() {
  list.sort(function (a, b) { return a - b; } )
  return list;
}

module.exports = {
  storeList: storeList,
  sortedDataList: sortedDataList
};