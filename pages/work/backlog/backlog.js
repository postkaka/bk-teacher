// pages/work/backlog/backlog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '待办事项',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    tab:[
      {type:"新资源",nub:123},
      {type:"已约到访",nub:123},
      {type:"已约试听",nub:123},
      {type:"已约补课",nub:123}
    ],
    currentIndex: 0,
    news:[
      {news:"有1位意向学员被分配给您",time:"2020-05-14 16:37"},
      {news:"有1位意向学员被分配给您",time:"2020-05-14 16:37"}
    ]
  },
  tabClick(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  offworkClick(){
    wx.navigateTo({
      url: '../offwork/offwork',
    })
  },
  studentClick(){
    wx.navigateTo({
      url: '../../student/student-crm/student-crm',
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