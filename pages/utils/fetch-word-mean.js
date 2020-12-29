const app = getApp()
var fetchWordMean =function(query) {
  var outerJS = require("../utils/sha256")
  var date = new Date()
  var curtime = Math.round(new Date().getTime()/1000);
  var salt = (new Date).getTime()
  var appKey= '2bb77fba2680792e'
  var key = 'hq5Xd8PSbpX60e0jqleCDsrdLS6qvo8c'
  var str1 = appKey + query + salt + curtime + key
  var sign =outerJS.sha256_digest(str1).toString(outerJS.sha256_encode_hex);
  var output
  //   wx.showLoading({ title: 'Loading...' })
    return new Promise((resolve, reject) => {
      wx.request({
          url: 'https://openapi.youdao.com/api',
          type: 'post',
          dataType: 'jsonp',
          data: {
            q:query,
            appKey: appKey,
            salt: salt,
            from: 'en',
            to: 'zh-CHS',
            sign: sign,
            signType: "v3",
            curtime: curtime,
          }, 
          success:resolve,
          complete: wx.hideLoading
        // function(data){
        //   output = JSON.parse(data.data)
        // }
      })
  })
}
module.exports = {
  fetchWordMean:fetchWordMean
}
