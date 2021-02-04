// pages/wallet/prepaidInformation/prepaidInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '钱包充值',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    item:{
      name:"柴伊娃",
      phone:13840164610,
      src:"../../../assets/image/crm-2.png",
      time:"2020-05-12"
    },
    counselors:[["咨询师1号","咨询师2号","无"]],
    _counselors:["咨询师1号"],
    _btn:["上一步",'保存'],
    pay:0
  },
  bindKeyInput(e){
    let pays = e.detail.value
    this.setData({
      pays 
    })
  },
  _picker(e){
    this.setData({
      _counselors: e.detail
    })
  },
  getValueLength: function (e) {
    let value = e.detail.value
    let len = parseInt(value.length)
    this.setData({
      remark: value
    })
    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        minWord: "至少填写10个字哦～"
      })
    else if (len > this.data.min)
      this.setData({
        minWord: " "
      })
    //最多字数限制
    if (len > 200) return;
    this.setData({
      currentWordNumber: len //当前字数 
    })
  },
  lastBtnClick(e){
    if(e.detail == 1){
      wx.navigateTo({
        url: '../walletTopUp/walletTopUp',
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