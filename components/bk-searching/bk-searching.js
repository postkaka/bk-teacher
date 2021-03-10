// components/bk-searching/bk-searching.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    classify:{
      type:Array,
      value:[]
    },
    classifyList:{
      type:Array,
      value:[]
    },
    show:{
      type:Number,
      value:0
    },
    justify:{
      type:String,
      value:"justify-content: space-around"
    },
    src:{
      type:String,
      value:"../../assets/image/back.png"
    },
    classStyle:{
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
    showClick(e){
      let id = e.currentTarget.dataset.index
      this.triggerEvent("showClick",id)
     this.setData({
       show:1,
       num:e.currentTarget.dataset.index
     })
    },
    itemClick(e){
      console.log(e)
      let nus = e.currentTarget.dataset.index
      this.triggerEvent("itemSClick",nus)
      let num = this.data.num
      let nums = "classifyList[" + num + "].nums"
      this.setData({
        show: 0,
        [nums]: nus
      })
    }
  }
})
