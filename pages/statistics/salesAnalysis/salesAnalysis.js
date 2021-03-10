// pages/statistics/salesAnalysis/salesAnalysis.js
import * as echarts from '../../../components/ec-canvas/echarts';
let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    textStyle:{
        fontSize:15,
        color:'#333'
    },
    color:['#60ADE1','#FFC87D',"#FF8270"],
    xAxis: {
        type:'category',
        data: ["新生报名人次","续报人次","扩科人次"],
    },
    yAxis: {
        type:"value",
        show: false
    },
    series: [ {
        name: '课消金额',
        type: 'bar',
        data: [247, 217, 500],
        barWidth : 30,//柱图宽度
        itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[20,20, 0, 0],
                   //每根柱子颜色设置
                color: function(params) {
                    let colorList = [
                        "#60ADE1",
                        "#FFC87D",
                        "#FF8270"
                    ];
                    return colorList[params.dataIndex];
            },
        }
      },
      barGap:'0%'
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '销售分析',
            fontColor: "#333333",
            headerbg: '#FFFFFF',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        tab:["咨询转化","报名统计","尾款统计","钱包统计"],
        classifyList:[
            {list:["今日","昨日","本周","本月"],nums:0},
            {list:["咨询师","学管二号","学管一号"],nums:0}
        ],
        _classifyList:[
            {list:["今日","昨日","本周","本月"],nums:0},
            {list:["报名人次","报名金额"],nums:0}
        ],
        _classifyLists:[
            {list:["今日","昨日","本周","本月"],nums:0},
        ],
        show:0,
        id:0,
        display:"none", 
        xx:0,
        item:[
            {type:"跟进",stu:3,stus:180},
            {type:"预约到访",stu:1,stus:60},
            {type:"完成到访",stu:4,stus:240},
            {type:"预约试听",stu:3,stus:180},
            {type:"完成试听",stu:3,stus:180},
            {type:"新增/分配",stu:1,stus:60},
            {type:"意向学员报名",stu:4,stus:240},
        ],
        btn:["确认"],
        _item:[
            {type:"新生报名人次",nub:0},
            {type:"续报人次",nub:0},
            {type:"扩科人次",nub:0}
        ],
        ec: {
            onInit: initChart
        },
        now:0,
        __item:[
            {name:'报名总金额',a:"8,295",_a:"实收总金额",b:"8,295",_b:'应收总金额'},
            {name:'新生报名',a:"2,185",_a:"实收金额",b:"2,185",_b:'应收金额'},
            {name:'续报',a:"210",_a:"实收金额",b:"8,295",_b:'应收金额'},
            {name:'扩科',a:"5,900",_a:"实收金额",b:"5,900",_b:'应收金额'},
        ],
        itemss:{
            a:"0",
            _a:'累计尾款',
            __a:'待补金额',
            b:'0',
            _b:'累计尾款',
            __b:'已补金额',
            c:'0',
            _c:'累计尾款',
            __c:'清空金额',
        },
        items:{
            a:"200",
            _a:'累计钱包存入金额',
            b:'40',
            _b:'累计钱包消费金额',
            c:"0",
            _c:'累计钱包退费金额',
            d:'160',
            _d:'钱包可用金额'
        },
        xxxItem:[
            {nub:0,name:"充值人次",src:'../../../assets/image/c1.png'},
            {nub:0,name:"实充金额",src:'../../../assets/image/c9.png'}
        ],
        xxxItems:[
            {name:'尾款新增金额',nub:'0'},
            {name:'尾款已补金额',nub:'0'},
            {name:'尾款清空金额',nub:'0'}
        ]
    },
    showClick(e){
        // console.log(e)
          this.setData({
            show:e.detail
          })
      },
      chooseClick(e){
        this.setData({
            id:0,
            display:""
        })
    },
    nowSelect(e){
      let now = e.detail[0][0] +"-"+e.detail[0][1]
      let classifyList = this.data.classifyList
      classifyList[0].list.unshift(now)
      this.setData({
        classifyList:classifyList
      })
    },
    btnClick(){
      this.setData({
        display:"none"
      })
    },
    itemClick(e){
        console.log(e.detail)
        this.setData({
            xx:e.detail
        })
    },
    itemSClick(e){
        console.log(e.detail)
        if(e.detail == 1){
            this.setData({
                now:1
            })
        }else{
            this.setData({
                now:0
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