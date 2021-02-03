// pages/recruit/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '选择支付方式',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    pays:["微信支付","现金","钱包(实充余额￥0)"],
    _btn:["返回","确定"],
    alreadyPay:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pay:options.pay
    })
  },
  radioChange(e){
    let newArray = e.detail.value 
    this.setData({
      newArray
    })
  },
  btnClick(e){
    if(e.detail == 1){
      let newArray = this.data.newArray
      wx.navigateTo({
        url: '../classPay/classPay?newArray=' + newArray,
      })
    }else {
      wx.navigateTo({
        url: '../classPay/classPay',
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