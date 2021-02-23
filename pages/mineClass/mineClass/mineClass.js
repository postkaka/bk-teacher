// pages/mineClass/mineClass/mineClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '我的班级',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    name:"测试",
    _name:"测试班级",
    inform:{
      stu:2,
      homework:0,
      timetable:2,
      attendance:"12.5%",
      consume:8,
      sign:20
    }
  },
  studentClick(){
    wx.navigateTo({
      url: '../student/student',
    })
  },
  homeworkClick(){
    wx.navigateTo({
      url: '../../homework/homework/homework',
    })
  },
  timetableClick(){
    wx.navigateTo({
      url: '../../timetable/timetable/timetable',
    })
  },
  attendanceClick(){
    wx.navigateTo({
      url: '../attendance/attendance',
    })
  },
  dataStatisticsClick(){
    wx.navigateTo({
      url: '../../statistics/classConsumption/classConsumption',
    })
  },
  signInClick(){
    wx.navigateTo({
      url: '../signIn/signIn',
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