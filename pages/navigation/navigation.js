// pages/navigation/navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 103.991121,
    latitude: 30.770424,
    currData: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      success: function (res) {
        var longitude = res.longitude;
        var latitude = res.latitude;

        that.setData({
          longitude: longitude,
          latitude: latitude,
        })
      },
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  pagechang: function (e) {
    this.setData({
      currData: e.detail.current
    })
  },

  currpage: function (e) {
    if (this.data.currData === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currData: e.target.dataset.current
      })
    }
  },

})