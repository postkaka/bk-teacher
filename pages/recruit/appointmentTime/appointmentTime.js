// pages/recruit/appointmentTime/appointmentTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '预约试听',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    btn:["提交"],
    tab:["跟班试听","开班试听","预约到访"],
    object:[["本人","爸爸","妈妈","其他"]],
    _object:["本人"],
    mode:[["电话","微信","当面沟通"]],
    _mode:["微信"],
    id:0,
    classTime:0
  },
  itemClick(e){
    this.setData({
      id: e.detail
    })
  },
  _picker(e){
    this.setData({
      _object: e.detail
    })
  },
  picker(e){
    this.setData({
      _mode: e.detail
    })
  }, getValueLength: function (e) {
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
  chooseImageTap(){
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:function(res){
        console.log(res)
      }
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