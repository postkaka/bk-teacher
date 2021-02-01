// pages/recruit/sundryFees/sundryFees.js
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
    sundry:[
      {name:"哑铃",type:"体育器材",_type:"物品",value:"yl"},
      {name:"笔记本",type:"教具",_type:"物品",value:"bjb"},
      {name:"书费",type:"活动课",_type:"杂费",value:"sf"}
    ],
    btn:["取消","确认"],
    items:[]

  },
  radioChange(e){
  //  console.log(e.detail.value)
    let newArray = e.detail.value 
    this.setData({
      items: newArray
    })
    // console.log(this.data.items)
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