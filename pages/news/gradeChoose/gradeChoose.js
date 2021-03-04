// pages/news/classChoosse/classChoosse.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '选择班级学员',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
        },
        class:[
        {name:"能力风暴大颗粒"},
        {name:"文曲星课程33班"}
    ],
        select_all:false,
        btn:["返回","确认"]
    },
    radioChange(e){
        //  console.log(e.detail.value)
          let newArray = e.detail.value 
          this.setData({
            batchIds: newArray
          })
           console.log(this.data.items)
      },
      checkAll: function (e) {
        console.log(e)
        var that = this;
        var arr = [];  //存放选中id的数组
        for (let i = 0; i < that.data.class.length; i++) {
         that.data.class[i].checked = (!that.data.select_all)
        if (that.data.class[i].checked == true){
          // 全选获取选中的值
          arr = arr.concat(that.data.class[i]);
         }
        }
       console.log(arr)
        that.setData({
         class: that.data.class,
         select_all: (!that.data.select_all),
         batchIds:arr
        })
      },
      lastBtnClick(e){
          console.log(e.detail)
          if(e.detail == 0){
              wx.navigateTo({
                url: '../news/news',
              })
          }else {
              let lengths = {
                  id:2,
                  length:this.data.batchIds.length
              }
              let add = JSON.stringify(lengths)
              wx.navigateTo({
                url: '../news/news?add=' + add,
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