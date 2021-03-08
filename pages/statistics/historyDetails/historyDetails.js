// pages/statistics/historyDetails/historyDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '历史课酬详情',
            fontColor: "#FFFFFF",
            headerbg: '#60ADE1',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
         time:"2020-04-01~05-01" ,
         nub:100,
         class:[
             {class:'班组课',nub:100,time:2},
             {class:'1对1',nub:0,time:0}
         ]
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