// pages/recruit/enrollmentManagement/enrollmentManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '招生管理',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    classifyList:[
      {list:["全部","意向强度","初步意向","没有意向"],nums:0},
      {list:["全部","已约到访","完成到访","缺席到访","待跟进","已流失","跟进中","已约试听","完成试听","试听未到"],nums:0},
      {list:["全部","广告","地推","老带新","上门","在线商城","选课精灵","扫码录入","未知","分享"],nums:0}
    ],
    crm:[
      { 
      name:"李大王",
      time:"2020-05-14",
      type:"跟进过",
      intention:"意向强烈",
      state:"完成到访",
      source:"地推",
      administrator:"学员管理1号",
      src:"../../../assets/image/crm-2.png"
    }
    ]
  },
  plusClick(){
    wx.navigateTo({
      url: '../editInformation/editInformation',
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