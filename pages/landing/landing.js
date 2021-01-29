// pages/landing/landing.js
let interval = null //倒计时函数
let myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/ //手机号检测
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone:"",//输入的手机号
        code:"",//输入的验证码
        iscode:5655,//用于存放验证码接口里获取到的code
        date:'请选择日期',
        fun_id:2,
        time: '短信验证', 
        currentTime:61

    },
    // 获取输入的手机号
    handleInputPhone(e){
        this.setData({
            phone: e.detail.value
        })
    },
    // 获取输入的验证码
    handleInputNumber(e){
        this.setData({
            code: e.detail.value
        })
    },
    // 获取短信验证
    getCode(options){
        let that =this;
        let  a = this.data.phone;
        let currentTime = that.data.currentTime
        if (this.data.phone == ''){
            wx.showToast({
              title: '手机号不能为空',
              icon: 'none',
              duration: 1000
            })
            return false;
        } else if(!myreg.test(this.data.phone)){
            wx.showToast({
              title: '请输入正确的手机号',
              icon: 'none',
              duration: 1000
            })
            return false
        } else{
            wx.request({
                data: {},
                url: 'url',
                success(res) {
                    console.log(res.data.data)
                    this.setData({
                        iscode: res.data.data
                    })
                }
            })
            interval = setInterval(function (){
                currentTime--;
                that.setData({
                    time: currentTime+'秒'
                })
                if(currentTime <= 0) {
                    // console.log("时间到了")
                    clearInterval(interval)
                    that.setData({
                        time: '重新发送',
                        currentTime:61,
                        disabled: false
                    })
                }
            }, 1000)
        } 
     

    },
    // 点击文字触发获取验证码
     auth(e){
        this.getCode();
        let that = this
        that.setData({
            disabled:true
        })
        
    },
    // 点击提交信息
      next(){
        if(this.data.phone == ''){
            wx.showToast({
              title: '手机号不能为空',
              icon: 'none',
              duration: 1000
            })
            return false;
        }else if(!myreg.test(this.data.phone)){
            wx.showToast({
              title: '请输入正确的手机号',
              icon: 'none',
              duration:1000
            })
            return false;
        }else if(this.data.code == ''){
            wx.showToast({
              title: '验证码不能为空',
              icon: 'none',
              duration: 1000
            })
            return false;
        }
        // else if(this.data.code !== this.data.iscode){
        //     wx.showToast({
        //       title: '验证码错误',
        //       icon: 'none',
        //       duration: 1000
        //     })
        //     return false;
        // }
        else{
            wx.setStorageSync('phone', this.data.phone);
            wx.redirectTo({
              url: '../selective/selective',
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