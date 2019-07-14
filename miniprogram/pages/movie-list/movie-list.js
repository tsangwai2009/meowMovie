// pages/movie-list/movie-list.js
const db = require('../../utils/db')
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    /* {
    image: '/images/movie1.jpg',
    name: 'Product 1',
    price: "50.50",
  },
    {

    image: '/images/movie2.jpg',
    name: 'Product 2',
    price: "40.10",
  },
  {

    image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
    name: 'Product 2',
    price: "40.10",
  },
  {

    image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product3.jpg',
    name: 'Product 3',
    price: "30.50",
  }*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getMovieList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getMovieList() {
    wx.showLoading({
      title: 'Still Loading...',
    })
    db.getMovieList().then(result => {
      wx.hideLoading()
    
      const data = result.data
      console.log(data)
      if (data.length) {
        // update the total price for cart
        this.setData({
          movieList: data
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      wx.showToast({
        icon: 'none',
        title: 'Failed'
      })
    })
    },
})