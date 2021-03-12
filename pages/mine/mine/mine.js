// pages/mine/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '个人信息',
            fontColor: "#ffffff",
            headerbg: '#60ADE1',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          infrom:{
            src:'../../../assets/image/crm-1.png',name:"任生",iphone:"18510794401",account:"18510794401",school:"班客新赛道（铁西校区）"
        },
        counselors:[["班客新赛道（铁西校区）","无"]],
        _counselors:["班客新赛道（铁西校区）"],
        display:"none",
        btn:["取消","确认"]
    },
    _picker(e){
        this.setData({
          _counselors: e.detail
        })
      },
    payChange(){
        this.setData({
          display: ""
        })
      },
    btnClick(){
      this.setData({
        display:"none"
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