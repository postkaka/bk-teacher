// pages/remark/comment/comment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '学员信息',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          class:[
            {name:"能力风暴大颗粒",class:'李大王',teacher:'教师1号'},
            {name:"能力风暴大颗粒",class:'张小米',teacher:'教师1号'},
            {name:"能力风暴大颗粒",class:'王小花',teacher:'教师1号'},
            {name:"文曲星2班",class:'',teacher:'教师1号',nub:2},
          ],
          btn:["返回"]
    },
    btnClick(){
        wx.navigateTo({
          url: '../remark/remark',
        })
    },
    remarkClick(e){
        let id = e.currentTarget.dataset.index
        if(this.data.class[id].nub){
            wx.navigateTo({
              url: '../remark/remark?id=2',
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