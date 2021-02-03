// pages/recruit/classRecord/classRecord.js
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
    btn:["新增记录","预约","报名"],
    class:{
      name:"能力风暴大颗粒",
      class:12,
      consume:0,
      check:0.00,
      diy:0.00,
      roll:0.00
    },
    buys:[
      {
        src:"../../assets/image/time1.png",
        buy:"+",
        type: "购买课时",
        time:"2020-04-27 周一",
        quantity:'12'
    }
    ]
  },
  btnClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../newRecord/newRecord',
      })
    }else if(e.detail == 1){
      wx.navigateTo({
        url: '../appointmentTime/appointmentTime',
      })
    }
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