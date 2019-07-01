const db = wx.cloud.database({
  env: 'movie-2hovl'
})
module.exports = {
  getMovieList() {
    return db.collection('movie').get()
  },
  getReviewList(){
    return db.collection('review').get()
  }
}