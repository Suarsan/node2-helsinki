const blogUtils = require('../utils/blog.utils')

test('dummy returns one', () => {
  const blogs = [{}]

  const result = blogUtils.dummy(blogs)
  expect(result).toBe(1)
})
test('total of likes', () => {
  const blogs = [{likes: 1}, {likes: 4}]

  const result = blogUtils.getTotalOfLikes(blogs)
  expect(result).toBe(5)
})
