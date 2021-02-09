// pages/spendingRecord/spendingDetails/spendingDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '支出详情',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    _data:["全部分类"],
    dates:[["全部分类","销售商品","办公用品","工资","房租","水电","其他"]],
    display:'none',
    displays:'none',
    list:{name:"任生",time:'2020-05-12',goodsName:'笔记本',price:15},
    btn:["确认"]
  },
  picker(e){
    console.log(e.detail)
    this.setData({
      _data: e.detail
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
    let time = "list.time"
    this.setData({
      [time]: e.detail[0]
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
    if (len > 40) return;
    this.setData({
      currentWordNumber: len //当前字数 
    })
  },
  btnClick(){
    this.setData({
      displays:''
    })
  },
  _buttonClick(){
    wx.navigateTo({
      url: '../spending/spending',
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