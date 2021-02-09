// pages/shopping/inventory/inventory.js
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
    list:{
      name:"李二王",
      phone:'13470085999'
    },
    goods:[],
    _btn:["下一步(1)"]
  },
  delClick(e){
    console.log(e.currentTarget.dataset.index)
    let goods = this.data.goods
    goods.splice(e.currentTarget.dataset.index,1)
    this.setData({
      goods: goods
    })
  },
  nextClick(){
    let add = JSON.stringify(this.data.goods)
    wx.navigateTo({
      url: '../settlement/settlement?add=' + add,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.add){
      let add = JSON.parse(options.add)
      this.setData({
        goods:this.data.goods.concat(add)
      })
      console.log(this.data.goods)
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