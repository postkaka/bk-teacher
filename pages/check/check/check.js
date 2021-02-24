// pages/check/check/check.js
let util = require("../../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '今日考勤',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    time:0,
    class:[
      {name:'文曲星2班',time:'08:05~11:05'},
      {name:'文曲星2班',time:'08:05~11:05'}
    ]
  },
  recordClick(){
    wx.navigateTo({
      url: '../checkRecord/checkRecord',
    })
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
    let time =  util.formatTime(new Date());
    let date=util.getDates(7, time);
    let now = date[0]
    this.setData({
      now
    })
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

  }
})