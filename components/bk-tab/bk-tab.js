// components/bk-tab/bk-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
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
