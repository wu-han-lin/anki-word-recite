var fetchWordMean = require('../utils/fetch-word-mean').fetchWordMean
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    currentWord:'day',
    currentWordInfo:{}
},
  onLoad() {
    //测试默认值为day 测试结束后删除
    var that = this
    fetchWordMean(this.data.currentWord)
      .then( res => {
        res = JSON.parse(res.data)
        this.setData({
          currentWordInfo:res
        })
         console.log(that.data.currentWordInfo)
      })
      //测试代码 end
      
  },
  wordInputHandle: function(e) {
    this.setData({
      currentWord:e.detail.value
    })
  },
  searchWordButton: function (e) {
    var that = this
    fetchWordMean(this.data.currentWord)
      .then( res => {
        res = JSON.parse(res.data)
        this.setData({
          currentWordInfo:res
        })
         console.log(that.data.currentWordInfo)
      })
    
      
  },
  bindAudioTapHandle: function(e){
    var audioPlayer = wx.createInnerAudioContext()
    audioPlayer.src = this.data.currentWordInfo.speakUrl
    audioPlayer.play()
  }
})