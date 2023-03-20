// app.js
App({
  onLaunch(options) {
    console.log("小程序初始化-onLaunch"+options);
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options){
    console.log("小程序初始化-onShow"+options);
    this.globalData.times =+ new Date();
  }
  ,
  globalData: {
    userInfo: null,
    times: null
  }
})
