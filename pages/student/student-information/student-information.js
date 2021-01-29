// pages/student/student-information/student-information.js
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
    base:{
      birthday:"2008-01-08",
      age:"5岁",
      grade:"五年级",
      school:"第一小学",
      remark:"123",
      number:"100049640",
      site:"铁西广场",
      wallet:"￥0",
      ntegral:"0",
      phone:"13470070150"
    },
    display:'none',
    source:[["广告","分享","上门","地推","未知","老带新","在线商城"]],
    _source:["地推"],
    class:[["思辩语文","诗文通课程","小萌芽","文曲星课程","智多星课程","能力风暴大颗粒","实验123"]],
    _class:["文曲星课程"],
    intention:[["意向强烈","初步意向","没有意向"]],
    _intention:["初步意向"]
  },
  picker(e){
    console.log(e.detail)
    this.setData({
      _source: e.detail
    })
  },
  pickerClass(e){
    this.setData({
      _class: e.detail
    })
  },
  pickerIntention(e){
    this.setData({
      _intention: e.detail
    })
  },
  showClick(){
    this.setData({
      display:''
    })
  },
  buttonClick(){
    this.setData({
      display:"none"
    })
  },
  nowSelect(e){
    let data = "base.birthday"
    console.log(data)
    this.setData({
      [data] : e.detail 
    })
  },
  integralClick(){
    wx.navigateTo({
      url: '../integral/integral',
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