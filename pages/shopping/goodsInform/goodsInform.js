// pages/shopping/goodsInform/goodsInform.js
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
    btn:["取消添加",'确认添加'],
    name:'',
    unit:"对",
    price:40,
    inventory:2,
    figure:1,
  },
  add(){
    if(this.data.figure < this.data.inventory){
      this.setData({
        figure: this.data.figure + 1
      })
    }
  },
  subtract(){
    if(this.data.figure >0){
      this.setData({
        figure: this.data.figure - 1
      })
    }
  },
  btnClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../goods/goods',
      })
    }else {
      let list = {}
      list.name = this.data.name;
      list.unit = this.data.unit;
      list.price = this.data.price;
      list.figure = this.data.figure;
      let add = JSON.stringify(list)
      wx.navigateTo({
        url: '../inventory/inventory?add=' + add,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.name){
      this.setData({
        name: options.name
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