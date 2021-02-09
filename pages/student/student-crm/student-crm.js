// pages/student/student-crm/student-crm.js
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
    btn:["新增记录","预约","报名"],
    crm:{
      name:"李大王",
      time:"2020-05-14",
      type:"跟进过",
      intention:"意向强烈",
      state:"完成到访",
      source:"地推",
      administrator:"学员管理1号",
      src:"../../assets/image/crm-1.png"
    },
    records:[
      {type:"移入公共池",typeImg:"../../../assets/image/std2.png",contact:"电话",linkman:"本人",operating:"流失原因: 价格贵",intention:"考虑",operator:"任生",time:"2020-05-27 14:28"},
      {type:"跟进",typeImg:"../../../assets/image/std1.png",contact:"电话",linkman:"本人",intention:"考虑",operator:"任生",time:"2020-05-27 14:28"},
      {type:"跟进",typeImg:"../../../assets/image/std1.png",contact:"微信",linkman:"妈妈",operating:"下次跟进时间: 2020-06-30 09:00",intention:"123123",operator:"校长权限",time:"2020-05-27 14:28"}
    ],
    reservation:[
      {type:'试听未动',className:'测试班级',data:'2020-04-06',time:'09:00~10:00'},
      {type:'完成到访',data:'2020-01-01',time:'17:00'},
    ]
  },
  basicInformationClick(){
    wx.navigateTo({
      url: '../basic-information/basic-information',
    })
  },
  studentClick(){
    wx.navigateTo({
      url: '../student-information/student-information',
    })
  },
  recordClick(){
    wx.navigateTo({
      url: '../record/record',
    })
  },
  reservationClick(){
    wx.navigateTo({
      url: '../reservation/reservation',
    })
  },
  itemClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../newRecord/newRecord',
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