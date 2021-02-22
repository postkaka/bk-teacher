// pages/timetable/timetable/timetable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '课程表',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    type:0,
    class:[
      {time:"07:05~10:05",type:'待上课',class:'文曲星2班',name:'李大王',teacher:'教师1号',nub:0},
      {time:"20:09~21:39",type:'待上课',class:'能力风暴大粒',name:'李大王',teacher:'教师1号',nub:1},
    ]
  },
  nowSelect(e){
    this.setData({
        date: e.detail
    })
    let now =(new Date(this.data.nowdate)).getTime();
    let date =(new Date(this.data.date)).getTime();
    if(date < now){
        console.log("这是昨天")
        this.setData({
            lastday: 1
        })
    }else{
        this.setData({
            lastday:0
        })
    }
  },
  toggleType(){
    if(this.data.type == 0){
        this.setData({
            type: 1
        })
    }else{
        this.setData({
            type: 0
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