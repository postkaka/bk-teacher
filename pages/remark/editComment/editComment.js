// pages/remark/editComment/editComment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '编辑点评',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        newRemark:{className:"文曲星1班",time:"2020-05-14 周四 11:15~14:15",classNub:1,attendance:1},
        students:[
            {src:"../../../assets/image/crm-1.png",name:"试验报名学员一",round:0}
        ],
        title:{title:"123",nub:5,text:'非常好'},
        btn:["提交"],
        counselors:[["咨询师1号","咨询师2号","无"]],
        _counselors:[""],
    },
    _picker(e){
        this.setData({
         _counselors: "",
        })
        wx.navigateTo({
          url: '../commentDetail/commentDetail',
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