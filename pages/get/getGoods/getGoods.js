// pages/get/getGoods/getGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '物品领取',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    classifyList:[
      {list:["所在班级",'能力风暴大颗粒:张小米','能力风暴大颗粒:王小花',"能力风暴大颗粒:录入实验者一",'能力风暴大颗粒:毛毛','文曲星2班','文曲星1班',"测试班级"],nums:0},
      {list:["未领取物品"],nums:0}
    ],
    stu:[
      {name:"毛毛",iphone:"15840127342",type:'哑铃',num:'1*1',src:'../../../assets/image/crm-2.png'},
      {name:"毛毛",iphone:"15840127342",type:'哑铃',num:'1*1',src:'../../../assets/image/crm-2.png'}
    ],
    show:0,
    inventory:2,
    figure:1,
    btn:["取消",'确认']
  },
  getClick(e){
    console.log(e)
    this.setData({
      show:1,
      i:e.currentTarget.dataset.index
    })
  },
  add(){
    if(this.data.figure < this.data.inventory){
      this.setData({
        figure: this.data.figure + 1
      })
    }
  },
  subtract(){
    if(this.data.figure >1){
      this.setData({
        figure: this.data.figure - 1
      })
    }
  },
  btnClick(e){
    this.setData({
      show:0
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