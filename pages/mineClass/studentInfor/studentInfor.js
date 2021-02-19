// pages/mineClass/studentInfor/studentInfor.js
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
    phone:"(18241097090)",
    item:[
      { name:"12",i1:"暂未分班(测试)",i2:0,i3:"~",i4:'测试1',i5:'教师1号',
      i6:0,i7:'~',i8:'12'},
      { name:"测试",i1:"测试班级",i5:'任生',i6:0,i7:'~',i8:'11'}
    ],
    record:3,
    visit:0,
    btn:["新增记录","预约",'报名']
  },
  studentClick(){
    let add =JSON.stringify(this.data.item)
    wx.navigateTo({
      url: '../studentInforAll/studentInforAll?add=' + add,
    })
  },
  btnClick(e){
    if(e.detail == 2){
      let add =JSON.stringify(this.data.add)
      wx.navigateTo({
        url: '../classify/classify?add=' + add,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.add){
      let add = JSON.parse(options.add)
      this.setData({
        add
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