// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad(options) {
    console.log("携带过来的参数信息",options);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  handleClickEvent(){
    // 跳转到首页
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})
