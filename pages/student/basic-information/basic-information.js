// pages/student/basic-information/basic-information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '基础信息编辑',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    message:{
      photo:"../../assets/image/crm-1.png",
      gender:"男",
      name:'李大王',
      code:"中国大陆(+86)",
      phone:"13470070150"
    },
  
    option:[["男","女","不明"]],
    gender:["男"],
    code:["中国大陆(+86)"],
    options:[["中国大陆(+86)","阿富汗(+93)","澳大利亚(+61)","日本(+81)","澳大利亚(+61)","澳大利亚(+61)","澳大利亚(+61)","澳大利亚(+61)"]]
  },
  btnClick(){
    wx.navigateTo({
      url: '../student-crm/student-crm',
    })
  },
  picker(e){
    console.log(e.detail)
    this.setData({
      gender: e.detail
    })
    console.log(this.data.gender)
  },
  pickers(e){
    this.setData({
      code: e.detail
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