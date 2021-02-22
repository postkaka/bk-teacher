// pages/timetable/modification/modification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '修改排课',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    class:{
      class:'能力风暴大颗粒',
      student:"李大王",
      data:'2020-05-19',
      time:'20:09',
      nub:90,
      order:"暂不配置",
      tea:"教师1号"
    },
    btn:["取消修改","确认修改"],
    display:'none',
    _btn:["确认"]
  },
  _btnClick(){
    this.setData({
      display:''
    })
  },
  btnClick(){
    wx.navigateTo({
      url: '../timetable/timetable',
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