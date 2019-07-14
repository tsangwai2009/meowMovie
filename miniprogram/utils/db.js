const db = wx.cloud.database({
  env: 'movie-2hovl'
})
module.exports = {
  getMovieList() {
    return db.collection('movie').get()
  },
  getReviewList(movieId) {
    return db.collection('review').where({
      movieId,
    }).get()
  },
  addReview(data) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addReview',
          data,
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },
  //specific Movie 
  getMovieDetail(id) {
    return db.collection('movie').where({
      _id: id
    }).get()
  }
}