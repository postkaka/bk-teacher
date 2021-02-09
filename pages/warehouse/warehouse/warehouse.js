// pages/warehouse/warehouse/warehouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '库存管理',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    classifyList:[
      {list:["全部类型","资料","教具","服装","体育器材","实验器材"],nums:0},
      {list:["更多筛选","库存预警","库存不足","库存数量"],nums:0}
    ],
    tab:["50以下","50-100","101-150","150以上"],
    show:0,
    goods:[
      {name:"哑铃",type:'体育器材',specification:'1',inventory:'0',unget:'0'},
      {name:"笔记本",type:'教具',specification:'1',inventory:'0',unget:'0'},
    ],
    btn:["物品出库","物品入库"]
  },

  showClick(e){
    console.log(e)
    this.setData({
      show:e.detail
    })
  },
  btnClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../delivery/delivery',
      })
    }else {
      wx.navigateTo({
        url: '../stock/stock',
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