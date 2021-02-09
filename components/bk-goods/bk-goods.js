// components/bk-goods/bk-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    a:{
      type:String,
      value:''
    },
    _a:{
      type:String,
      value:''
    },
    b:{
      type:String,
      value:''
    },
    _b:{
      type:String,
      value:''
    },
    c:{
      type:String,
      value:''
    },
    _c:{
      type:String,
      value:''
    },
    delStyle:{
      type:String,
      value:''
    },
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
    delClick(){
      this.triggerEvent("delClick")
    }
  }
})
