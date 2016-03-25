// the best interface is the simplest
// and exporting anon function is the
// highest level we can use that to
// give the API `uniques(array)`
export default (arr) => {

  // we loop over the array while
  // setting every item as the key
  // in an object and in the result
  // array on the first pass through
  let items = {}, result = []
  for (let item of arr) {
    if (items[item]) continue
    items[item] = true
    result.push(item)
  }

  // The result array now holds the
  // unique items in the array and
  // is in the order they were found
  return result
}
