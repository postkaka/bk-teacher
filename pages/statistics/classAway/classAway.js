// pages/statistics/classAway/classAway.js
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
        color:'#fff'
    },
    color:['#FFC87D','#FF8270'],
    xAxis: {
        type:'category',
        data: ["12月","1月","2月","3月","4月","5月"],
    },
    yAxis: {
        type:"value"
    },
    legend: {
        y: 'bottom',    //延Y轴居中
        x: 'center',//居右显示
       itemWidth: 10,//控制图列宽度
       itemHeight:10,//控制图例高度
        data: ['课消金额', '新增金额'],
        textStyle:{//图例文字的样式
            color:'#fff',
            fontSize:14
        }
    },
    series: [ {
        name: '课消金额',
        type: 'bar',
        data: [0, 0, 0, 247, 217, 500],
        itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[20,20, 0, 0]
            }
      },
      barGap:'0%'
    },
    {
        name: '新增金额',
        type: 'bar',
        data: [0, 50, 0, 524, 412, 804],
        itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[20,20, 0, 0]
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
            title: '课消分析',
            fontColor: "#FFFFFF",
            headerbg: '#60ADE1',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        classifyList:[{list:["全部校区"],nums:0}],
        boxText:[
            {title:"校区待总课时",nub:8},
            {title:"校区待消总金额",nub:"￥29,010"},
        ],
        ec: {
            onInit: initChart
          },
        time:["12月","1月","2月","3月","4月","5月"],
        classTime:[0, 0, 0, 247, 217, 500],
        addTime:[0, 50, 0, 524, 412, 804]
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