// pages/recruit/classChoose/classChoose.js
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
      name:"李大王",
      className:"能力风暴大颗粒",
      time:"2020-05-16",
      text:"无",
      figure:1,
      tea:"教师一号"
    },
    btn:["取消","确认"]
    
  },
  add(){
    this.setData({
      ["inform.figure"]: this.data.inform.figure + 1
    })
  },
  subtract(){
    if(this.data.inform.figure >1){
      this.setData({
        ["inform.figure"]: this.data.inform.figure - 1
      })
    }
  },
  btnClick(e){
    let that = this
    let id = e.detail;
    if(id == 1){
      let add = JSON.stringify(this.data.inform)
      wx.navigateTo({
        url: '../courseInformation/courseInformation?add=' + add,
      })
    }else{
      wx.navigateTo({
        url: '../courseInformation/courseInformation',
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