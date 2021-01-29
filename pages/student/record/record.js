// pages/student/record/record.js
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
    records:[
      {type:"移入公共池",typeImg:"../../../assets/image/std2.png",contact:"电话",linkman:"本人",operating:"流失原因: 价格贵",intention:"考虑",operator:"任生",time:"2020-05-27 14:28"},
      {type:"跟进",typeImg:"../../../assets/image/std1.png",contact:"电话",linkman:"本人",intention:"考虑",operator:"任生",time:"2020-05-27 14:28"},
      {type:"跟进",typeImg:"../../../assets/image/std1.png",contact:"微信",linkman:"妈妈",operating:"下次跟进时间: 2020-06-30 09:00",intention:"123123",operator:"校长权限",time:"2020-05-27 14:28"}
    ],
    btn:["新增记录",'预约','报名']
  },
  btnClick(e){
    let id = e.detail
    if(id == 2){
      wx.navigateTo({
        url: '../../recruit/recruitStudent/recruitStudent',
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