var userInfo = {good:'good'}
App({
  globalData:{serverUrl:'http://127.0.0.1:5000/'},
  onLaunch:function(){
    var that = this
    wx.login({
      success (res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://127.0.0.1:5000/login',
            type:'post',
            dataType: 'jsonp',
            data: {
              code: res.code
            },
            success:function(data){
              that.globalData.userInfo = JSON.parse(data.data)
              console.log(that.globalData.userInfo)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

})