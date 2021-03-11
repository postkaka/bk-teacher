// pages/statistics/studentsAnalysis/studentsAnalysis.js
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
    color:['#FFFFFF'],
    xAxis: {
        type:'value',
    },
    yAxis: {
        type:"category",
        data: ["测试","文曲星","测试3"],
    },
    grid:{
           left: '13%',
    },
    series: [ {
        name: '课消金额',
        type: 'bar',
        barWidth : 10,//柱图宽度
        data: [4,1,1],
        itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[0,20, 20, 0]
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
            title: '学员分析',
            fontColor: "#FFFFFF",
            headerbg: '#60ADE1',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        classifyList:[{list:["全部校区"],nums:0}],
        _classifyList:[{list:["测试","能力风暴大颗粒"],nums:0}],
        boxText:[
            {title:"在学总人数",nub:"9"},
            {title:"本月报名4人",nub:"本月报名0人"},
        ],
        ec: {
            onInit: initChart
          },
        time:["在学人数","满班率%","教师"],
        classTime:[0,23,"教师1号"],
        addTime:[2,25,"任生"]
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