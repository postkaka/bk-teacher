// pages/assist/assistItem/assistItem.js
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
    tab:["最新","已完成"],
    infor:[
      {name:'122',time:"2020-03-18",times:"2020-03-17 12:00",infor:'1212122222222222222222222222222222222',teacher:"校长",maker:'嗷嗷'},
      {name:'采购教具',time:"2020-03-18",times:"2020-03-17 12:00",infor:'采购教具',teacher:"教师1号",maker:'教务、任生、楼管'}
    ],
    infors:[
      {name:'122',time:"2020-03-18",times:"2020-03-17 12:00",infor:'1212122222222222222222222222222222222',teacher:"校长",maker:'嗷嗷'},
      {name:'采购教具',time:"2020-03-18",times:"2020-03-17 12:00",infor:'采购教具',teacher:"教师1号",maker:'教务、任生、楼管'}
    ],
    currentIndex:0,
  },
  itemClick(e){
    this.setData({
      currentIndex: e.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      currentIndex:options.id
    })
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