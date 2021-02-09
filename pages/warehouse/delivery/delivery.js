// pages/warehouse/delivery/delivery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '物品出库',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    btn:["取消添加","确认添加"],
    goods:[
      {name:"笔记本",specification:'1',frontCount:0,laterCount:2,price:15,type:"本",ty:"教具"}
    ]
  },
  delClick(e){
    let id = e.detail
    let goods = this.data.goods
     goods.splice(id,1)
    this.setData({
      goods: goods
    })
  },
  bindKeyInput(e){
    let frontCount = "goods[0].frontCount"
    let laterCount = 'goods[0].laterCount'
    this.setData({
      [laterCount]: this.data.laterCount
    })
    if(e.detail < this.data.goods[0].laterCount){
      let news = this.data.goods[0].laterCount - e.detail;
      this.setData({
        [frontCount]: e.detail,
        [laterCount]: news
      })
    }else if(e.detail == this.data.goods[0].laterCount){
      this.setData({
        [frontCount]: e.detail,
        [laterCount]: 0
      })
    }
  },
  btnClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../warehouse/warehouse',
      })
    }else {
      let add = JSON.stringify(this.data.goods)
      wx.navigateTo({
        url: '../outboundListing/outboundListing?add='+ add,
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
    let laterCount = this.data.goods[0].laterCount
    this.setData({
      laterCount
    })
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