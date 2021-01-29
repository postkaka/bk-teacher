// components/bk-lines/bk-lines.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      value:""
    },
    nameSymbol:{
      type:String,
      value:""
    },
    symbol:{
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
    inputDisplay:{
      type:String,
      value:"none"
    },
    type:{
      type:String,
      value:'text'
    },
    pla:{
      type:String,
      value:"请输入"
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
    bindKeyInput(e){
      let inputValue = e.detail.value;
      this.triggerEvent("bindKeyInput", inputValue)
    }
  }
})
