// pages/remark/commentDetail/commentDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '点评详情',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        inform:{
            src:"../../../assets/image/crm-1.png",
            className:"文曲星1班",
            studentName:"试验报名学员一",
            time:"2020-05-14 周四 11:15~14:15"
        },
        title:{title:"123",nub:5,text:'非常好'},
        btn:["撤回点评","分享点评"],
        comment:{name:'任生',text:"11",time:"2020-05-18 02:22"},
        display:'none',
        btns:["取消","确定"]
    },
    btnClick(e){
        let id =  e.detail
        if(id == 0 ){
            this.setData({
                display:""
            })
        }
    },
    tureClick(e){
        let id = e.detail
        if(id == 0){
            this.setData({
                display:"none"
            })
        }else {
            wx.navigateTo({
              url: '../remark/remark?currentIndex=1',
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