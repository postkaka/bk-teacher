// pages/shopping/shoppingList/shoppingList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '物品杂费购买',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    list:[
      {src:"../../../assets/image/crm-2.png",name:"柴伊娃",phone:"13840164610"},
      {src:"../../../assets/image/crm-2.png",name:"柴伊娃",phone:"13840164610"},
      {src:"../../../assets/image/crm-2.png",name:"柴伊娃",phone:"13840164610"},
      {src:"../../../assets/image/crm-2.png",name:"柴伊娃",phone:"13840164610"}
    ]
  },
  prepaidInformationClick(){
    wx.navigateTo({
      url: '../goods/goods',
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