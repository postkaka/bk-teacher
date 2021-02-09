// pages/recruit/editInformation/editInformation.js
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
    gender:[["男","女"]],
    _gender:["男"],
    birthday:'',
    display:'none',
    relation:[["本人","妈妈","爸爸","其他"]],
    _relation:["本人"],
    _code:["中国大陆(+86)"],
    code:[["中国大陆(+86)","阿富汗(+93)","澳大利亚(+61)","日本(+81)","澳大利亚(+61)","澳大利亚(+61)","澳大利亚(+61)","澳大利亚(+61)"]],
    channel:[["广告","分享","上门","地推","未知","老带新","在线商城"]],
    _channel:["地推"],
    class:[["思辩语文","诗文通课程","小萌芽","文曲星课程","智多星课程","能力风暴大颗粒","实验123"]],
    _class:["文曲星课程"],
    intention:[["意向强烈","初步意向","没有意向"]],
    _intention:["初步意向"],
    btn:["确认"]
  },
  // 性别
  genderPicker(e){
    this.setData({
      _gender: e.detail
    })
  },
  // 生日
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
    this.setData({
      birthday : e.detail[0] 
    })
  },
  //关系
  relationPicker(e){
    this.setData({
      _relation: e.detail
    })
  },
  // 国家码
  codePicker(e){
    this.setData({
      _code: e.detail
    })
  },
  // 渠道
  channelPicker(e){
    this.setData({
      _channel: e.detail
    })
  },
  // 课程
  classPicker(e){
    this.setData({
      _class:e.detail
    })
  },
  // 程度
  intentionPicker(e){
    this.setData({
      _intention:e.detail
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