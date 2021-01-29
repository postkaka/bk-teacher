// pages/inform/inform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '通知',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    tab:["最新","已读"],
    currentIndex:0,
    news:[
      {type:"学员报名成功通知",time:"2020-05-12",news:"毛毛(学员)成功报名了，请注意校区课时变化"},
      {type:"学员报名成功通知",time:"2020-05-12",news:"毛毛学员的测试课程已完成补费，本次补费收入124000元"}
    ],
    oldNews:[
      {type:"学员报名成功通知",time:"2020-05-13",news:"王小花(学员)成功报名了能力风暴大颗粒，请注意校区课时 变化"},
      {type:"课时变更",time:"2020-05-13",news:"任生已将毛毛(学员)的测试退费，请注意"}
    ],
    display:'none'
  },
  itemClick(e){
    this.setData({
      currentIndex: e.detail
    })
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