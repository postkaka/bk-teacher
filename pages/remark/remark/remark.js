// pages/remark/remark/remark.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '点评记录',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        tab:["未完成点评","已完成点评"],
        class:{
            name:"能力风暴大颗粒",
            teacher:"李大王"
        },
        remark:[
            {className:"文曲星1班",time:"2020-05-14 周四 11:15~14:15",classNub:1,attendance:1},
            {className:"文曲星1班",time:"2020-05-14 周四 11:15~14:15",classNub:1,attendance:1}
        ],
        show:0,
        students:[
            {src:"../../../assets/image/crm-1.png",name:"试验报名学员一",round:0}
        ],
        round:0,
        chooseStudents:[],
        inform:{
            className:"文曲星1班",time:"2020-05-14 周四 11:15~14:15",classNub:1,attendance:1
        },
        currentIndex:0
    },
    commentClick(){
        wx.navigateTo({
          url: '../comment/comment',
        })
    },
    remarkClick(e){
       let nub = e.currentTarget.dataset.index
       let newRemark = this.data.remark[nub]
       this.setData({
           newRemark,
           show:1
       })
    },
    roundClick(e){
        let nub = e.currentTarget.dataset.index
        let round = "students["+nub+"].round"
        let rounds = this.data.students[nub].round
        console.log(rounds)
        if(rounds == 0){
            this.setData({
               [round]:1,
               chooseStudents:this.data.students[nub]
            })
            console.log(this.data.students)
            
        }else {
            this.setData({
                [round]:0
            })
        }
    },
    roundAllClick(){
        let round = this.data.round
        if(round == 0){
            for (let i = 0; i < this.data.students.length; i++) {
                  this.setData({
                    ["students["+ i +"].round"]:1,
                    round: 1,
                    chooseStudents:this.data.students
                  })
                }
        }else {
            for (let i = 0; i < this.data.students.length; i++) {
                this.setData({
                  ["students["+ i +"].round"]:0,
                  round: 0,
                  chooseStudents:[]
                })
              }
        }
    },
    editCommentClick(){
        wx.navigateTo({
          url: '../editComment/editComment',
        })
    },
    itemClick(e){
        this.setData({
            currentIndex: e.detail
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.id||options.currentIndex){
            let id = options.id
            let currentIndex = options.currentIndex
            this.setData({
                id,
                currentIndex
            })
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