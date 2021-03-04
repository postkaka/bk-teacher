// pages/news/mineNews/mineNews.js
let util = require("../../../utils/util");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的消息',
            fontColor: "#FFFFFF",
            headerbg: '#60ADE1',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
        },
        text:"测试数据",
        _text:"测试数据请勿留意",
        _btn:["返回","发送"]
    },
    _btnClick(e){
        if(e.detail == 0){
            wx.navigateTo({
              url: '../news/news',
            })
        }else {
            wx.navigateTo({
              url: '../news/news',
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let time = util.formatTime(new Date());
        this.setData({
            time
        })
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