// pages/homework/putCourse/putCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '我的班级',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    class:"测试班级",
    time:'2020-04-27 周一 08:05~09:05',
    sundry:[
      {name:"冰冰",src:"../../../assets/image/crm-2.png",type:"缺勤",nub:1},
      {name:"冰冰",src:"../../../assets/image/crm-2.png",type:"缺勤",nub:1}
    ],
    btn:["下一步"],
    select_all:false
  },
  radioChange(e){
    //  console.log(e.detail.value)
      let newArray = e.detail.value 
      this.setData({
        items: newArray
      })
       console.log(this.data.items)
  },
  checkAll: function (e) {
    console.log(e)
    var that = this;
    var arr = [];  //存放选中id的数组
    for (let i = 0; i < that.data.sundry.length; i++) {
   
     that.data.sundry[i].checked = (!that.data.select_all)
   
     if (that.data.sundry[i].checked == true){
      // 全选获取选中的值
      arr = arr.concat(that.data.sundry[i]);
     }
    }
   console.log(arr)
    that.setData({
     sundry: that.data.sundry,
     select_all: (!that.data.select_all),
     batchIds:arr
    })
  },
  lastBtnClick(){
    let add = JSON.stringify(this.data.batchIds)
    wx.navigateTo({
      url: '../assign/assign?add='+ add,
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