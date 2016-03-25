import * as assert from 'assert'
import uniques from '../src/uniques'

suite('unique numbers', () => {

    test('should work with positive numbers', () => {
      assert.deepEqual([1,2,3,4], uniques([1,2,3,3,4]))
    })

    test('should work with negative numbers', () => {
      assert.deepEqual([-1,-2,-3,-4], uniques([-1,-2,-3,-3,-3,-3,-4]))
    })

    test('should work with mixed numbers', () => {
      assert.deepEqual([-1,2,-3,-4], uniques([-1,2,2,-3,-3,-3,-3,-4]))
    })

    test('should work with mixed types', () => {
      let input = [1,"ok","ok",2,3,{},{}]
      let expectation = [1,"ok",2,3,{}]
      assert.deepEqual(expectation, uniques(input))
    })

    test('should work with readme example', () => {
      let input = [1,"one","one","two",3,4,4,5]
      let expectation = [1,"one","two",3,4,5]
      assert.deepEqual(expectation, uniques(input))
    })

})
