// pages/statistics/particulars/particulars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      title: '课消详情',
      fontColor: "#FFFFFF",
      headerbg: '#60ADE1',
      hiddenBlock: false,
      slot: false,
      src:'../../assets/image/fback.png'
    },
    particulars:[
      {name:"上课次数",nub:"2"},
      {name:"上课时长",nub:"6h"},
      {name:"实消/应消",nub:"231/10"},
      {name:"消耗赠送课时",nub:"0"}
    ],
    tab:['班级课消','学员课消'],
    classifyList:[
      {list:["班级类型","全部","一对一","班组课"],nums:0},
      {list:["班级名称","全部","文曲星1班(已删除2020-11-21"],nums:0}
    ],
    class:[
      {className:"文曲星1班",type:"班组课",delete:'已删除2020-11-21 16:54:54',a:2,b:10,c:10}
    ],
    id:0,
    stu:[
      {name:'毛毛',phone:'15840127342',check:'暂无',a:221,b:0},
      {name:'试验报名学员',phone:'13211111111',check:'出勤2次',a:10,b:10},
    ]
  },
  itemClick(e){
    let id = e.detail
    this.setData({
      id: id
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