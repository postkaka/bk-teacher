// components/bk-key/bk-key.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    figure:{
      type:Number,
      value:null
    },
    display:{
      type:String,
      value:""
    },
    type:{
      type:String,
      value:"次"
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
    subtract(){
      this.triggerEvent("subtract")
    },
    add(){
      this.triggerEvent("add")
    }
  }
})
