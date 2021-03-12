// components/bk-line-picker/bk-line-picker.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    name:{
      type:String,
      value:""
    },
    lineFw:{
      type:String,
      value:""
    },
    textColor:{
      type:String,
      value:"#333333"
    },
    text:{
      type:String,
      value:""
    },
    borderBottom:{
      type:String,
      value:"1px solid #DDDDDD"
    },
    backDisplay:{
      type:String,
      value:""
    },
    photoDisplay:{
      type:String,
      value:"none"
    },
    photo:{
      type:String,
      value:""
    },
    listData_02:{
      type:Array,
      value:[]
    },
    picker_02_data:{
      type:Array,
      value:[]
    },
    isShow_02:{
      type:Boolean,
      value:false
    },
    titleText:{
      type:String,
      value:""
    },
    titleStyle:{
      type:String,
      value:""
    },
    symbol:{
      type:String,
      value:""
    },
    nameSymbol:{
      type:String,
      value:""
    },
    display:{
      type:String,
      value:"none"
    },
    displays:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPicker_02: function () {
      this.setData({
        isShow_02: true
      })
    },
    sureCallBack_02 (e) {
      let data = e.detail
      let pic = e.detail.choosedData
      this.setData({
        isShow_02: false,
        picker_02_data: e.detail.choosedData,
        picker_02_index:JSON.stringify(e.detail.choosedIndexArr)
      }),
      this.triggerEvent("picker",pic)
    },
    cancleCallBack_02 () {
      this.setData({
        isShow_02: false,
      })
    }
  }
})
