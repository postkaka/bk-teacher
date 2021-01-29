// components/bk-btn/bk-btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btn:{
      type:Array,
      value:[]
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
    btnClick(e){
      let btnNub = e.currentTarget.dataset.index
      this.triggerEvent("btnClick",btnNub)
    }
  }
})
