// pages/homework/homework/homework.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '我的班级',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    class:"测试班级",
    classifyList:[
      {list:["作业类型"],nums:0},
      {list:["批改状态"],nums:0},
      {list:["提交时间"],nums:0}
    ],
    infor:[
      {
        type:"新作业",
        title:"必做",
        name:"测试班级",
        time:"2020-04-27 周一 08:05~09:05",
        times:"2020-05-13",
        case:"待提交2人"
      }
    ],
    btn:["布置作业"]
  },
  classesClick(){
    wx.navigateTo({
      url: '../mineClass/mineClass',
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