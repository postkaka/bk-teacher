// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shortcuts:[
      {text:"待办事项",icon:"../../assets/image/s1.png"},
      {text:"钱包充值",icon:"../../assets/image/s2.png"},
      {text:"支出记录",icon:"../../assets/image/s3.png"},
      {text:"物品购买",icon:"../../assets/image/s4.png"},
      {text:"物品领取",icon:"../../assets/image/s5.png"},
      {text:"库存管理",icon:"../../assets/image/s6.png"},
      {text:"协作",icon:"../../assets/image/s7.png"} 
    ],
    management:[
      {text:"招生管理",icon:"../../assets/image/m1.png"},
      {text:"招生二维码",icon:"../../assets/image/m2.png"},
      {text:"课程表",icon:"../../assets/image/m3.png"},
      {text:"今日考勤",icon:"../../assets/image/m4.png"},
      {text:"学员管理",icon:"../../assets/image/m5.png"},
      {text:"课堂点评",icon:"../../assets/image/m6.png"},
      {text:"我的班级",icon:"../../assets/image/m7.png"},
      {text:"班级作业",icon:"../../assets/image/m8.png"},
      {text:"约课管理",icon:"../../assets/image/m9.png"}
    ],
    dataStatistics:[
      {text:"每月课消",icon:"../../assets/image/d1.png"},
      {text:"课酬统计",icon:"../../assets/image/d2.png"},
      {text:"课消分析",icon:"../../assets/image/d3.png"},
      {text:"销售分析",icon:"../../assets/image/d4.png"},
      {text:"学员分析",icon:"../../assets/image/d5.png"}
    ]
  },
  // 点击跳转页面
  infromClick(){
    wx.navigateTo({
      url: '../inform/inform',
    })
  },
  shortcutsClick(e){
    let num = e.currentTarget.dataset.index
    if(num == 0){
      wx.navigateTo({
        url: '../work/backlog/backlog',
      })
    }else if(num == 1){
      wx.navigateTo({
        url: '../wallet/walletTopUp/walletTopUp',
      })
    }else if(num == 2){
      wx.navigateTo({
        url: '../spendingRecord/spending/spending',
      })
    }else if(num == 3){
      wx.navigateTo({
        url: '../shopping/shoppingList/shoppingList',
      })
    }else if(num == 4){
      wx.navigateTo({
        url: '../get/getGoods/getGoods',
      })
    }else if(num == 5){
      wx.navigateTo({
        url: '../warehouse/warehouse/warehouse',
      })
    }

  },
  managementClick(e){
    let num = e.currentTarget.dataset.index
    if(num == 0){
      wx.navigateTo({
        url: '../recruit/enrollmentManagement/enrollmentManagement',
      })
    }else if(num == 1){

    }else if(num == 2){
      wx.navigateTo({
        url: '../timetable/timetable/timetable',
      })
    }else if(num == 3){
        wx.navigateTo({
          url: '../check/check/check',
        })
    }else if(num == 4){

    }else if(num == 5){

    }else if(num == 6){
      wx.navigateTo({
        url: '../mineClass/mineClass/mineClass',
      })
    }else if(num == 7){
      wx.navigateTo({
        url: '../homework/homework/homework',
      })
    }
  },
  dataStatisticsClick(e){
  let num = e.currentTarget.dataset.index
  if(num == 0){
    wx.navigateTo({
      url: '../statistics/classConsumption/classConsumption',
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