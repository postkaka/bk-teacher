// pages/mineClass/studentInforAll/studentInforAll.js
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
    day:319,
    btn:["新增记录","预约",'报名']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.add){
      let add = JSON.parse(options.add)
      this.setData({
        add
      })
    }
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