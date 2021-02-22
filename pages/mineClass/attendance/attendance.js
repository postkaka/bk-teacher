// pages/mineClass/attendance/attendance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '出勤记录',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    attendance:[
      {data:"2020-03-16",time:"09:10~10:10",a:2,b:3},
      {data:"2020-03-16",time:"09:10~10:10",a:0,b:5},
      {data:"2020-03-16",time:"09:10~10:10",a:0,b:4},
      {data:"2020-03-16",time:"09:10~10:10",a:0,b:4},
      {data:"2020-03-16",time:"09:10~10:10",a:0,b:4},
    ]
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