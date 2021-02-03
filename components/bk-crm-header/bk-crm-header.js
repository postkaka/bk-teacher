// components/bk-crm-header/bk-crm-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    crm:{
      type:Object,
      value:{
        name:"",
        time:"",
        type:"",
        intention:"",
        state:"",
        source:"",
        administrator:"",
        src:"../../assets/image/crm-1.png"
      }
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
    basicInformationClick(){
      this.triggerEvent("basicInformationClick")
    }
  }
})
