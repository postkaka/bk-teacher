// pages/student/management/management.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '学员管理',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        tab:[
            {title:"有停课",src:'../../../assets/image/management-2.png',srcClick:"../../../assets/image/_management-2.png"},
            {title:"课时不足",src:'../../../assets/image/management-3.png',srcClick:"../../../assets/image/_management-3.png"},
            {title:"即将到期",src:'../../../assets/image/management-4.png',srcClick:"../../../assets/image/_management-4.png"},
            {title:"待分班",src:'../../../assets/image/management-5.png',srcClick:"../../../assets/image/_management-5.png"},
            {title:"微信绑定",src:'../../../assets/image/management-6.png',srcClick:"../../../assets/image/_management-6.png"}
        ],
        imgindex:0,
        sundry:[
            {src:'../../../assets/image/crm-1.png',name:"李二王",classTime:12,other:0,
            teacher:"咨询师姓名",_src:"../../../assets/image/management-2.png",otherSrc:"../../../assets/image/management-5.png",othersSrc:"../../../assets/image/management-2.png"
        },
        {src:'../../../assets/image/crm-1.png',name:"张小米",classTime:30,other:0,
        teacher:"",_src:"",otherSrc:"",othersSrc:""},
        {src:'../../../assets/image/crm-1.png',name:"王小花",classTime:280,other:0,
        teacher:""},
        {src:'../../../assets/image/crm-1.png',name:"柴伊娃",classTime:100,other:0,
        othersSrc:"../../../assets/image/management-6.png"},
        {src:'../../../assets/image/crm-1.png',name:"录入实验者一",classTime:100,other:0,
        teacher:"",_src:"",otherSrc:"",othersSrc:""},
        ],
        _btn:["取消","选择学管"],
        show:0,
        btns:["分配学管"],
        counselors:[["咨询师1号","咨询师2号","无"]],
        _counselors:[""],
        btns:["取消","确定"],
        display:'none'
    },
    changeClick(e){
        let id = e.currentTarget.dataset.index
        this.setData({
            imgindex: id
        })
    },
    radioChange(e){
        this.setData({
            batchIds: e.detail.value
        })
    },
    checkAll: function (e) {
        console.log(e)
        var that = this;
        var arr = [];  //存放选中id的数组
        for (let i = 0; i < that.data.sundry.length; i++) {
       
         that.data.sundry[i].checked = (!that.data.select_all)
       
         if (that.data.sundry[i].checked == true){
          // 全选获取选中的值
          arr = arr.concat(that.data.sundry[i]);
         }
        }
       console.log(arr)
        that.setData({
         sundry: that.data.sundry,
         select_all: (!that.data.select_all),
         batchIds:arr
        })
      },
      btnClick(){
          this.setData({
              show:1
          })
      },
      cancelClick(){
          this.setData({
              show:0
          })
      },
      _picker(e){
        this.setData({
         _counselors: e.detail,
          display:''
        })
      },
      tureClick(e){
        console.log(e.detail)
        if(e.detail == 0){
            this.setData({
                _counselors:[""],
                display:"none"
            })
        }else {
            this.setData({
                _counselors:[""],
                display:"none"
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