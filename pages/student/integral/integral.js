// pages/student/integral/integral.js
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
    integral:2000,
    record:[
      {type:"手动减分",integral:20,dispose:"-",remark:12,time:"2020-12-16",style:'subtraction'},
      {type:"手动加分",integral:2000,dispose:"+",remark:12,time:"2020-12-16",style:'add'}
    ],
    btn:["扣减积分","增加积分"]
  },
  btnClick(e){
    let that = this
    let id = e.detail;
    if(id == 1){
      wx.navigateTo({
        url: '../integral-transformation/integral-transformation?integral=' + that.data.integral,
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   if(options.add){
    let add = JSON.parse(options.add)
    console.log(add)
    this.setData({
      record:this.data.record.concat(add),
      integral:  Number(this.data.integral) + Number(add.integral)
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