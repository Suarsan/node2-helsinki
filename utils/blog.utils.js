const dummy = (blogs) => {
    return blogs.length
}

const getTotalOfLikes = (blogs) => {
    return blogs.reduce((acc, curr) => acc += curr.likes, 0)
}
  
module.exports = { 
    dummy, 
    getTotalOfLikes 
}
