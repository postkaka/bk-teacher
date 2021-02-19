// pages/mineClass/classChoose/classChoose.js
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
    class:[
      {name:"少儿美术",mub:1},
      {name:"测试视频课",mub:1},
      {name:"测试视频课",mub:0}
    ],
    btn:['返回']
  },
  btnClick(){
    wx.navigateTo({
      url: '../classify/classify',
    })
  },
  payClick(e){
    console.log(e.currentTarget.dataset.index)
    let id = e.currentTarget.dataset.index
    let add = JSON.stringify(this.data.class[id])
    wx.navigateTo({
      url: '../pay/pay?add='+ add,
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