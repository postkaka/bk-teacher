// pages/check/checkRecord/checkRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '考勤记录',
      fontColor: "#FFFFFF",
      headerbg: '#60ADE1',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    infor:{
      timeA:"2020-05-19",
      timeB:"20:09~21:39",
      week:"周二",
      class:"能力风暴大粒",
      name:"李大王",
      teacher:'教师1号'
    },
    id:0,
    tab:['学员信息','课程大纲'],
    student:[
      {src:"../../../assets/image/crm-1.png",name:"李大王",phone:'13470070150',type:"请假"}
    ],
    show:0,
    class:{
      name:"1212",
      target:'1212',
      content:'1212'
    },
    btn:["编辑"]
  },
  itemClick(e){
    let id = e.detail
    this.setData({
      id: id
    })
  },
  showClick(){
   if(this.data.show == 0){
    this.setData({
      show:1
    })
   }else {
    this.setData({
      show:0
    })
   }
  },
  particularsClick(){
    wx.navigateTo({
      url: '../particulars/particulars',
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