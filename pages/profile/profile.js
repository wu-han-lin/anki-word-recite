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
  },
  bindButtonTapHandle:function(){
    wx.request({
      url: 'http://127.0.0.1:5000/addword',
      type:'post',
      success:function(data){
        console.log(data)
      }
    })
  }
})