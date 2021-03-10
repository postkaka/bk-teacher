// components/bk-tab/bk-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab:{
      type:Array,
      value:[]
    },
    currentIndex:{
      type:Number,
      value:0
    },
    padding:{
      type:String,
      value:"0 155rpx 0 155rpx"
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
    itemClick(e){
      let newId = e.currentTarget.dataset.index
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent("itemClick",newId)
    },
  }
})
