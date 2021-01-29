// pages/recruit/classPackage/classPackage.js
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
    tab:["课程课时包","共享课时包"],
    btn:["返回"],
    package:[
      {name:"能力风暴大颗粒",type:"1对1",class:"4"},
      {name:"实验123",type:"班组课",class:"0",nub:"4个套餐"},
      {name:"测试3",type:"班组课",class:"1"},
      {name:"测试",type:"班组课",class:"2"}
    ],
    share:[
      {name:"12",type:"班组课",class:"测试、测试3"}
    ],
    nub: 0
  },
  itemClick(e){
    this.setData({
      nub: e.detail
    })
  },
  btnClick(){
    wx.navigateTo({
      url: '../recruitStudent/recruitStudent',
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