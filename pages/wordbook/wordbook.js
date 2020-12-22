var userAllWordlist = require('../../data/vocabulary').wordList
var defaultShowingWordsNumber = 20
var showingWords = userAllWordlist.slice(0,defaultShowingWordsNumber)
var loadWordNumber=10
Page({
  data:{
    showingWords:showingWords
  },
  onLoad :function(){
  },
  onReachBottom:function(){
    showingWords = showingWords.concat(userAllWordlist.slice(showingWords.length,showingWords.length+loadWordNumber))
    this.setData({
      showingWords:showingWords
    })
  }
})