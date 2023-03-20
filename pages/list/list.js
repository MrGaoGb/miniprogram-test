// pages/list/list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"商户交易列表",
    vid:123445,
    userList:[{
      userName:"高启强",
      age:35
    },{
      userName:"高启盛",
      age:25
    },{
      userName:"高启兰",
      age:23
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 初始化请求
    // 页面创建时执行
    console.log("页面创建-onLoad",options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面首次渲染完毕时执行
    console.log("-----onReady----", app.globalData.times);
    setTimeout(_=>{
      this.setData({
        message:"查询完毕"
      })
    },3000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("-----onShow----")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 声明点击事件
  handleClickEvent(event){
    console.log("被点击了",event);
    // 获取自定参数
    const requestParams = event.currentTarget.dataset;
    console.log("获取到点击事件传递的参数:",requestParams);
  }
,
  handleClickToEvent(){
    // 路由跳转页面
    wx.navigateTo({
      url: '/pages/news/news',
    })
  }
})