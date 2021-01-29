// pages/student/integral-transformation/integral-transformation.js
let util = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '积分分数',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    integral:0,
    inform:{
      src:'../../../assets/image/crm-2.png',
      name:"柴伊娃",
      phone:"(13840164610)"
    },
    rule:[["无"]],
    _rule:["无"],
    point:null,
    minWord:0,
    max:200,
    min:0,
    btn:["取消","提交"],
    add:{type:"手动加分",integral:0,dispose:"+",remark:"",time:"",style:'add'},
    remark:'',
    time:""
  },
  bindKeyInput(e){
    console.log(e)
    this.setData({
      integral: e.detail
    })
  },
  picker(e){
    console.log(e.detail)
    this.setData({
      _rule: e.detail
    })
  },
  btnClick(e){
    let that = this
    let id = e.detail;
    if(id == 1){
      let integral = this.data.integral
      let remark = this.data.remark
      let time = this.data.time
      if(integral && remark && time){
        this.setData({
          ["add.integral"] : integral,
          ["add.remark"] : remark,
          ["add.time"] : time
        })
        let add = JSON.stringify(this.data.add)
        wx.navigateTo({
          url: '../integral/integral?add=' + add,
        })
      } else {
        wx.showToast({
          title: '请填写信息',
          icon: 'none'
        })
      }
      // wx.navigateTo({
      //   url: '../integral-transformation/integral-transformation?integral=' + that.data.integral,
      // })
    } else {
      wx.navigateTo({
        url: '../integral/integral',
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      integral: options.integral
    })
    
    let currenTime= util.formatTime(new Date());
    console.log(currenTime)
    this.setData({
      time: currenTime
    })
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