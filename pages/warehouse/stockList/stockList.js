// pages/warehouse/stockList/stockList.js
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
    btn:["取消添加","确认添加"],
    goods:[
      {name:"",specification:'1',frontCount:1,laterCount:2,price:15,type:"本",ty:"教具"}
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
    let news = this.data.goods[0].laterCount + Number(e.detail)
    this.setData({
      [frontCount]: e.detail,
      [laterCount]: news
    })
  },
  btnClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../stock/stock',
      })
    }else {
      let add = JSON.stringify(this.data.goods)
      wx.navigateTo({
        url: '../warehousingConfirm/warehousingConfirm?add='+ add,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options.name){
      let name = options.name
      let nameCount = 'goods[0].name'
      this.setData({
        [nameCount]: name
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