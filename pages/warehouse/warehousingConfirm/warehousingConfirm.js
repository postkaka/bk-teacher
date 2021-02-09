// pages/warehouse/warehousingConfirm/warehousingConfirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '物品入库',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    classifyList:[
      {list:["全部类型","资料","教具","服装","体育器材","实验器材"],nums:0}
    ],
    goods:[
      {name:'哑铃',type:'体育器材'},
      {name:'笔记本',type:'教具'},
    ]
  },
  nextClick(){
    let add = JSON.stringify(this.data.add)
    wx.navigateTo({
      url: '../warehousingSuccess/warehousingSuccess?add=' + add,
    })
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