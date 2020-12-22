
var wordlist = require('../../data/vocabulary').wordList
var wordlistWithMean = require('../../data/word-list').wordList
var fetchWordMean = require('../utils/fetch-word-mean').fetchWordMean
var getRandomArrayItems = require('../utils/random-array-elements').getRandomArrayItems
var currentWordIndex = 0

Page({
  data:{
    word:'',
    wordPhonetic:'',
    wordMean:'',
    options:[],
    check:[],
    background:['#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF'],
    checkIconShow:[false,false,false,false]
  },
  onLoad:function pageUpdate(){
    this.setData({
      word:wordlist[currentWordIndex],
      wordPhonetic:'',
      wordMean:'',
      options:'',
      background:['#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF'],
      checkIconShow:[false,false,false,false]
    })
    fetchWordMean(this.data.word)
    .then( res => {
      //拿到当前单词释义后插入选项数组
      res = JSON.parse(res.data)
      optArray.push({
        'definition':res.basic.explains,
        'check':true
      })
      //最后一步打乱数组
      optArray = optArray.sort(function() {
        return (0.5-Math.random());
      })  
      this.setData({
        wordPhonetic:res.basic.phonetic,
        wordMean:res.basic.explains,
        options:optArray,
        speakUrl:res.speakUrl
      })
      })
      //先插入三个随机选项
    var randomArray = getRandomArrayItems(wordlistWithMean,3)
    var optArray = []
    for (var index=0;index<3;index++){
      // optArray.push(randomArray[index].definition) 
      optArray.push(randomArray[index]) 
      optArray[index].check = false
    }

  },
  bindOptionTapHandle:function(e){
    //此处有bug，多次点击后会莫名其妙报错 暂未找到原因
    var currentOptionId = parseInt(e.target.dataset.id)
    if(this.data.options[currentOptionId].definition===this.data.wordMean){
      //选对了的处理
      var background = this.data.background
      background[currentOptionId] = '#8BC34A'
      this.setData({
        background: background
      })
      wx.showLoading({
        title: '加载中',
      })
      currentWordIndex+=1
      var loadPromise =  new Promise ((resolve,reject) => {
        this.onLoad()
      })
      loadPromise.then( res =>{        
      })      
    }
    else{
      //选错了的处理
      var background = this.data.background
      var checkIconShow = this.data.checkIconShow
      checkIconShow[currentOptionId] = true
      background[currentOptionId] = '#EB3941'
      this.setData({
        background: background,
        checkIconShow:checkIconShow
      })
    }
  },
  bindAudioTapHandle:function(){
    // console.log('111')
    var audioPlayer = wx.createInnerAudioContext()
    audioPlayer.src = this.data.speakUrl
    audioPlayer.play()
  }
})