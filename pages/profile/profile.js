// pages/profile/profile.js
Page({
  data: {
    userInfo: null
  },

  getUserInfo (e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
})