// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '发布消息',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    member:[["全校学员","按课程学员","按班级学员","手动选择学员"]],
    _member:["全校学员"],
    btn:["预览","发送"],
    display:"none",
    _btn:["取消","确定"]
  },
  picker(e){
    console.log(e)
    let menber = this.data.member
    let _menber = e.detail
    for(let i =0;i<menber[0].length;i++){
      if(_menber == menber[0][i]){
        console.log(i);
        let index = i;
        this.setData({
          index
        })
        break;
      }
    }
    if(this.data.index == 1){
      wx.navigateTo({
        url: '../classChoosse/classChoosse',
      })
    }else if(this.data.index == 2){
      wx.navigateTo({
        url: '../gradeChoose/gradeChoose',
      })
    }else if(this.data.index == 3){
      wx.navigateTo({
        url: '../studentChoose/studentChoose',
      })
    }
    this.setData({
      _member: e.detail
    })
    
  },
  getValueLength: function (e) {
    let value = e.detail.value
    let len = parseInt(value.length)
    this.setData({
      remark: value
    })
    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        minWord: "至少填写10个字哦～"
      })
    else if (len > this.data.min)
      this.setData({
        minWord: " "
      })
    //最多字数限制
    if (len > 1000) return;
    this.setData({
      currentWordNumber: len //当前字数 
    })
  },
  chooseImageTap(){
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:function(res){
        console.log(res)
      }
    })
  },
  btnClick(e){
    if(e.detail == 0){
      wx.navigateTo({
        url: '../mineNews/mineNews',
      })
    }else {
      this.setData({
        display:""
      })
    }
  },
  _btnClick(){
    this.setData({
      display:"none"
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  if(options.add){
    let add =JSON.parse(options.add)
    if(add.id ==1 ){
      let news = [this.data.member[0][1]]
      this.setData({
        _member:news,
        add: add
      })
    }else if(add.id ==2 ){
      let news = [this.data.member[0][2]]
      this.setData({
        _member:news,
        add: add
      })
    }else {
      let news = [this.data.member[0][3]]
      this.setData({
        _member:news,
        add: add
      })
    }
  }
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