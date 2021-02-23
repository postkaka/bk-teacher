// pages/mineClass/signIn/signIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '学员签到',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    class:{
      time:'2020-07-27',
      src:"../../../assets/image/crm-2.png",
      name:"任生",
      stu:20
    },
    student:[
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""},
      {src:"../../../assets/image/crm-1.png",types:""}
    ],
    type:[["正常","迟到","请假","未到"]],
    _type:[""],
  },
  _picker(e){
    let id  = e.currentTarget.dataset.index
    let type = e.detail[0]
    this.data.student[id].types = type
    this.setData({
      _type:"",
      student:this.data.student
    })
    console.log(this.data.student)
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