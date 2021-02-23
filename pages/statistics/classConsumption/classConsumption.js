// pages/statistics/classConsumption/classConsumption.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '每月课消',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    classifyList:[
      {list:["全部角色","教师","助教"],nums:0}
    ],
    year:"2020",
    month:'05',
    show:0,
    nub:2020,
    months:[
      {month:'01',name:"一月"},
      {month:'02',name:"二月"},
      {month:'03',name:"三月"},
      {month:'04',name:"四月"},
      {month:'05',name:"五月"},
      {month:'06',name:"六月"},
      {month:'07',name:"七月"},
      {month:'08',name:"八月"},
      {month:'09',name:"九月"},
      {month:'10',name:"十月"},
      {month:'11',name:"十一月"},
      {month:'12',name:"十二月"},
    ],
    btn:["确认"],
    teacher:[
      {name:"教师1号",type:"教师",a:231,b:10},
      {name:"任生",type:"教师",a:170,b:10}
    ]
  },
  showClick(){
    this.setData({
      show:1
    })
  },
  addClick(){
    let nub = this.data.nub + 1
    this.setData({
      nub: nub
    })
  },
  subtractClick(){
    let nub = this.data.nub -1
    this.setData({
      nub:nub
    })
  },
  monthsClick(e){
    let id = e.currentTarget.dataset.index
    let month = this.data.months[id].month
    this.setData({
      month: month
    })
  },
  btnClick(){
    this.setData({
      show: 0,
      year: this.data.nub
    })
  },
  particularsClick(){
    wx.navigateTo({
      url: "../particulars/particulars",
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