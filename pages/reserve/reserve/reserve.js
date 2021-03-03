// pages/reserve/reserve/reserve.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '约课管理',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        classifyList:[
            {list:["今日","昨日","本周","本月"],nums:0},
            {list:["班级","思辩语文","诗文通课程","小萌芽","智多星课程","文曲星课程","能力风暴大颗粒","实验123"],nums:0},
            {list:["预约状态"],nums:0}
        ],
        show:0,
        id:0,
        display:"none",
        btn:["确认"]
    },
    showClick(e){
        // console.log(e)
          this.setData({
            show:e.detail
          })
      },
    chooseClick(){
        this.setData({
            id:0,
            display:""
        })
    },
    nowSelect(e){
      let now = e.detail[0][0] +"-"+e.detail[0][1]
      let classifyList = this.data.classifyList
      classifyList[0].list.unshift(now)
      this.setData({
        classifyList:classifyList
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