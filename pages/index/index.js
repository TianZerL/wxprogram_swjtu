//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindIntroduceTap: function() {
    wx.navigateTo({
      url: '/pages/introduction/introduction',
    })
  },
  bindnavigationTap: function() {
    wx.navigateTo({
      url: '/pages/navigation/navigation',
    })
  }
})
