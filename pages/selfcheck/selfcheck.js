var App = getApp()
var serverUrl = App.globalData.serverUrl
var addWord = require('../utils/word-operation').addWord
var wordlist = require('../../data/word-list').wordList
var currentWordIndex = 0
var fetchWordMean = require('../utils/fetch-word-mean').fetchWordMean
Page({
  data:{
    wordList:''
  },
  onLoad(){
    console.log(addWord)
    this.setData({
      wordlist : wordlist,
      currentWord : wordlist[currentWordIndex]
    })
  },
  bindCanDoTapHandle(){
    currentWordIndex += 1
    this.setData({
      wordlist : wordlist,
      currentWord : wordlist[currentWordIndex]
    })
  },
  bindCantDoTapHandle(){
    if(true){
      // console.log(App.globalData.userInfo.openid)
      addWord(serverUrl,this.data.currentWord.content,App.globalData.userInfo.openid)
      .then((res)=>{
        console.log(res)
      })
    }
    currentWordIndex += 1
    this.setData({
      wordlist : wordlist,
      currentWord : wordlist[currentWordIndex]
    })
    
  }
})