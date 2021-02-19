// pages/student/newRecord/newRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '新增记录',
      fontColor: "#333333",
      headerbg: '#FFFFFF',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    obj:[["电话",'微信',"面签"]],
    _obj:["电话"],
    per:[["父母",'奶奶',"本人"]],
    _per:["父母"],
    time:[
      [2020,2021,2022,2023,2024],
      ["01","02","03","04","05","06","07","08","09","10","11","12"],
      ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      ["00","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      ["00","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
    ],
    _time:["2020-12-16 16:00"],
    type:[["价格贵","自动流失","距离太远","年龄不合适","教学环境不佳","上课时间不匹配","对试听课老师不满意"]],
    _type:[],
    btn:["保存"],
    displays:'none',
  },
  perPicker(e){
    console.log(e.detail)
    this.setData({
      _per: e.detail
    })
  },
  objPicker(e){
    console.log(e.detail)
    this.setData({
      _obj: e.detail
    })
  },
  timePicker(e){
    let _time = [e.detail[0]+"-"+e.detail[1]+"-"+e.detail[2]+'  '+e.detail[3]+":"+e.detail[4]]
    this.setData({
      _time: _time
    })
  },
  typePicker(e){
    this.setData({
      _type:""
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
  btnClick(){
    this.setData({
      displays:''
    })
  },
  _buttonClick(){
    this.setData({
      displays:"none"
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