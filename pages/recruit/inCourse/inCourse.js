// pages/recruit/inCourse/inCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '学员信息',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    crm:{
      name:"李大王",
      time:"2020-05-14",
      type:"跟进过",
      intention:"意向强烈",
      state:"完成到访",
      source:"地推",
      administrator:"学员管理1号",
      src:"../../assets/image/crm-1.png"
    },
    class:{
      nub:1,
      name:"能力风暴大颗粒",
      class:"能力风暴大颗粒班",
      rate:"~",
      use:0,
      sum:10,
      time:10,
      period:20,
      follow:10,
      followUp:0
    },
    btn:["新增记录","预约","报名"]
  },
  classTimeClick(){
    wx.navigateTo({
      url: '../classTime/classTime',
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