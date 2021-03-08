// pages/statistics/remuneration/remuneration.js
let util = require("../../../utils/util");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '课酬统计',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        tab:["当月课酬","历史课酬"],
        boxText:[
            {title:"累计课酬(元)",nub:8},
            {title:"昨日新增课酬(元)",nub:0},
        ],
        nub:0,
        class:[
            {class:"班组课",time:0,nub:0},
            {class:"1对1",time:0,nub:8}
        ],
        id:0,
        classifyList:[{list:["全部"],nums:0}],
        history:[
            {times:"2020-04~2020-05",nub:100,time:"2020-05-13 14:03",name:"任生"},
            {times:"2020-04~2020-05",nub:0,time:"2020-05-13 14:03",name:"校长"}
        ]
    },
    itemClick(e){
        let id = e.detail
        this.setData({
            id: id
        })
    },
    historyClick(){
        wx.navigateTo({
          url: '../historyDetails/historyDetails',
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
        let time = util.formatTime(new Date());
        this.setData({
            time
        })
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