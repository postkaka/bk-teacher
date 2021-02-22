Component({
    //初始默认为当前日期
    properties: {
        defaultValue: {
            type: String,
            value: ''
        },
        //星期数组
        weekText: {
            type: Array,
            value: ['日', '一', '二', '三', '四', '五', '六']
        },

    },

    // 组件的初始数据
    data: {
        //绘制数组
        thisMonthDays: [],
        nowMonth: [], //当前月数组
        nowWeek: [], //当前星期数组
        //显示日期
        title: '',
        //格式化日期
        format: '',
        year: 0,
        month: 0,
        date: 0,
        select:'',//选中日期
        nowdata:''
    },
    ready: function () {
        this.today();
    },

    methods: {
        //切换展示
        toggleType: function () {
            var that = this;
            if(that.data.thisMonthDays.length<10){
                that.setData({
                    thisMonthDays: that.data.nowMonth
                })
            }else{
                that.setData({
                    thisMonthDays: that.data.nowWeek
                })
            }
          this.triggerEvent("toggleType")
          console.log(that.data.nowWeek)
        },


        //初始化
        display: function (year, month, date) {
            var select = year + '-' + this.zero(month) + '-' + this.zero(date);
            this.setData({
                year,
                month,
                date,
                title: year + '年' + this.zero(month) + '月',
                select:select,
                nowdata:select
            })
            // this.createDays(year, month);
            this.createEmptyGrids(year, month);
            this.triggerEvent('nowdata', this.data.nowdata);
            console.log(this.data.select)


        },
        //默认选中当天 并初始化组件
        today: function () {
            let DATE = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date(),
                year = DATE.getFullYear(),
                month = DATE.getMonth() + 1,
                date = DATE.getDate(),
                select = year + '-' + this.zero(month) + '-' + this.zero(date);

            this.setData({
                format: select,
                select: select,
                year: year,
                month: month,
                date: date,
                YEAR: year,
                MONTH: month,
                DATE: date,
            })

            //初始化日历组件UI
            this.display(year, month, date);

            //发送事件监听
            this.triggerEvent('select', select);
        },

        //选择 并格式化数据
        select: function (e) {
            let date = e.currentTarget.dataset.date,
                select = this.data.year + '-' + this.zero(this.data.month) + '-' + this.zero(date);
            this.setData({
                title: this.data.year + '年' + this.zero(this.data.month) + '月',
                select: select,
                year: this.data.year,
                month: this.data.month,
                date: date
            });
            console.log(this.data.select)
            this.triggerEvent("nowSelect",this.data.select)
        },
        //上个月
        lastMonth: function () {
            let month = this.data.month == 1 ? 12 : this.data.month - 1;
            let year = this.data.month == 1 ? this.data.year - 1 : this.data.year;
            //初始化日历组件UI
            this.display(year, month, 0);
        },
        //下个月
        nextMonth: function () {
            let month = this.data.month == 12 ? 1 : this.data.month + 1;
            let year = this.data.month == 12 ? this.data.year + 1 : this.data.year;
            //初始化日历组件UI
            this.display(year, month, 0);
        },
        //获取当月天数
        getThisMonthDays: function (year, month) {
            return new Date(year, month, 0).getDate();
        },
        // 绘制当月天数占的格子
        createDays: function (year, month) {
            let thisMonthDays = [],
                days = this.getThisMonthDays(year, month);
            // console.log(days)
            for (let i = 1; i <= days; i++) {
                thisMonthDays.push({
                    date: i,
                    dateFormat: this.zero(i),
                    monthFormat: this.zero(month),
                    week: this.data.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()]
                });
            }
            return thisMonthDays;
        },
        // 生成 当前月星期 月
        createEmptyGrids: function (year, month) {
            var that = this;
            let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
                empytGridsBefore = [],
                empytGridsAfter = [],
                emptyDays = (week == 0 ? 7 : week);
            //当月天数
            var thisMonthDays = this.getThisMonthDays(year, month);
            //上月天数
            var preMonthDays = month - 1 < 0 ?
                this.getThisMonthDays(year - 1, 12) :
                this.getThisMonthDays(year, month - 1);

            //空出日期
            for (let i = 1; i <= emptyDays; i++) {
                empytGridsBefore.push(preMonthDays - (emptyDays - i));
            }

            var after = (42 - thisMonthDays - emptyDays) - 7 >= 0 ?
                (42 - thisMonthDays - emptyDays) - 7 :
                (42 - thisMonthDays - emptyDays);
            for (let i = 1; i <= after; i++) {
                empytGridsAfter.push(i);
            }

            var empytGridsBeforeDays = [];
            for (let i = 0; i < empytGridsBefore.length; i++) {
                empytGridsBeforeDays.push({
                    date: empytGridsBefore[i],
                    dateFormat: this.zero(empytGridsBefore[i]),
                    monthFormat: (this.zero(month - 1) == '00') ? '12' : this.zero(month - 1),
                    week: ''
                });
            }
            var empytGridsAfterDays = [];
            for (let i = 1; i <= empytGridsAfter.length; i++) {
                empytGridsAfterDays.push({
                    date: i,
                    dateFormat: this.zero(i),
                    monthFormat: (this.zero(month + 1) == '13') ? '01' : this.zero(month + 1),
                    week: ''
                });
            }
            var nowMonth = this.createDays(year, month);

            var new1 = empytGridsBeforeDays.concat(nowMonth);
            var new2 = new1.concat(empytGridsAfterDays);
            console.log(new2)
            
            var DATE = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date();
            var date = DATE.getDate();
            var nowMonth = new2.slice(0, new2.length);
            var nowWeek = [];
            for (let i = 1; i < nowMonth.length; i++) {
                if ((nowMonth[i].date == date) && (nowMonth[i].week != "")) {
                    console.log(i)
                    if (0 <= i && i < 7) {
                        console.log("1")
                        //   第1周
                        nowWeek = nowMonth.splice(0, 7);
                    }
                    if (7 <= i && i < 14) {
                        console.log("2")
                        //   第2周
                        nowWeek = nowMonth.splice(7, 7);
                    }
                    if (14 <= i && i < 21) {
                        console.log("3")
                        //   第3周
                        nowWeek = nowMonth.splice(14, 7);
                    }
                    if (21 <= i && i < 28) {
                        console.log("4")
                        //   第4周
                        nowWeek = nowMonth.splice(21, 7);
                    }
                    if (28 <= i && i < 35) {
                        console.log("5")
                        //   第5周
                        nowWeek = nowMonth.splice(28, 7);
                    }
                    if (35 <= i && i < 42) {
                        //   第6周
                        console.log("6")
                        nowWeek = nowMonth.splice(35, 7);
                    }
                    
                }
            }
            console.log(new2)
            console.log(nowWeek)
            this.setData({
                thisMonthDays: new2,
                nowMonth: new2,
                nowWeek: nowWeek
            })
        },

        //补全0
        zero: function (i) {
            return i >= 10 ? i : '0' + i;
        },
    }
})