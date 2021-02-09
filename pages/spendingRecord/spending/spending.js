// pages/spendingRecord/spending/spending.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '支出记录',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    time:"2020年05月",
    display:'none',
    _data:["全部分类"],
    dates:[["全部分类","销售商品","办公用品","工资","房租","水电","其他"]],
    totalPrice:10,
    list:[
      {name:'办公用品',type:'笔记本',time:'2020-05-12',price:15}
    ]
  },
  showClick(){
    this.setData({
      display:''
    })
  },
  buttonClick(){
    this.setData({
      display:"none"
    })
  },
  nowSelect(e){
    this.setData({
      time: e.detail[1]
    })
  },
  picker(e){
    console.log(e.detail)
    this.setData({
      _data: e.detail
    })
  },
  addClick(){
    wx.navigateTo({
      url: '../spendingDetails/spendingDetails',
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