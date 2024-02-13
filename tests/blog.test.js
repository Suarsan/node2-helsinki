const blogUtils = require('../utils/blog.utils')

test('dummy returns one', () => {
  const blogs = [{}]

  const result = blogUtils.dummy(blogs)
  expect(result).toBe(1)
})
