function collect_same_elements(collection_a, collection_b) {

  return buildSameElements(collection_a, collection_b);
}
function buildSameElements(collection_a, collection_b) {
  var same_varible = [];

  collection_a.forEach(function (collection_a_item) {
    var varible = getSameElements(collection_a_item, collection_b);
    if (varible)
      same_varible.push(varible);
  });

  return same_varible;
}

function getSameElements(collection_a_item, collection_b) {
  for (var i = 0; i < collection_b.length; i++) {
    var collection_b_item = collection_b[i];
    if (collection_a_item === collection_b_item) {

      return collection_b_item;
    }
  }

  return null;
}

module.exports = collect_same_elements;
