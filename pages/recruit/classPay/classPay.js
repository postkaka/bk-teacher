// pages/recruit/classPay/classPay.js
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
    inform:{
      src:'../../../assets/image/crm-1.png',
      name:"李大王",
      phone:"(13470070150)",
      type:"线下课程"
    },
    pay:24,
    display:'none',
    time:"2020-05-16",
    show:false,
    btn:["取消修改","确认修改"],
    _btn:["取消","下一步"],
    payment:{title:"选择付款方式",color:"#999999"},
    pays:{
      name:"能力风暴大颗粒",
      text:"新生报名",
      class:12,
      classPay:24,
      sundries:0,
      stuName:"李大王",
      type:"无请假限制"
    }
  },
  payChange(){
    this.setData({
      display: ""
    })
  },
  paymentClick(){
    let pay = this.data.pay
    wx.navigateTo({
      url: '../payment/payment?pay=' + pay,
    })
  },
  bindKeyInput(e){
    let pays = e.detail.value
    this.setData({
      pays 
    })
  },
  btnClick(e){
    if(e.detail == 1){
      this.setData({
        pay: this.data.pays,
        display:'none'
      })
    }else {
      this.setData({
        display:'none'
      })
    }
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
        url: '../inCourse/inCourse',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.newArray){
      this.setData({
        ["payment.title"] : options.newArray,
        ["payment.color"]:""
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