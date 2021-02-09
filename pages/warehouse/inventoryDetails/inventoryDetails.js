// pages/warehouse/inventoryDetails/inventoryDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '库存详情',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    classifyList:[
      {list:["全部类型","入库","出库"],nums:0},
      {list:["更多筛选"],nums:0},
    ],
    name:"哑铃",
    type:'体育器材',
    unit:"个",
    goodsList:[
      {type:"学员购买",alteration:-1,change:"￥40/已退￥0",Changes:-2,person:'任生',time:'2020-05-15 16:05'},
      {type:"学员购买",alteration:-1,change:"￥40/已退￥0",Changes:-2,person:'校长',time:'2020-05-15 16:05'},
      {type:"购买入库",alteration:+1,change:"￥20",Changes:2,person:'校长',time:'2020-05-15 16:05'},
      {type:"购买入库",alteration:+1,change:"￥20",Changes:2,person:'校长',time:'2020-05-15 16:05'}
    ]
  },
  getValueLength: function (e) {
    let value = e.detail.value
    let len = parseInt(value.length)
    this.setData({
      remark: value
    })
    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        minWord: "至少填写10个字哦～"
      })
    else if (len > this.data.min)
      this.setData({
        minWord: " "
      })
    //最多字数限制
    if (len > 200) return;
    this.setData({
      currentWordNumber: len //当前字数 
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