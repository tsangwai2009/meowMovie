// pages/home/home.js
const db = require('../../utils/db')
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    this.getMovie()
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
  getMovie() {
    wx.showLoading({
      title: 'Still Loading...',
    })

    db.getMovieList().then(result => {
      wx.hideLoading()
      const data = result.data

      if (data.length) {
        this.setData({
          movie: data[Math.floor(Math.random() * (data.length) + 0)]
        })
        console.log(this.data.movie)
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()
    })
  }
})