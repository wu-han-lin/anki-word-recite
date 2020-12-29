var serverUrl = 'http://127.0.0.1:5000/'
var App = getApp()
Page({
  data: {
    slides:[{
      image:'../../assets/slides/slides-1.png',
      link:""
    },
    {
      image:"../../assets/slides/slides-2.png",
      link:""
    },
    {
      image:"../../assets/slides/slides-3.png",
      link:""
    }
  ],
    grids:[{
      icon:'../../assets/grids/grid-1.png',
      name:'识词',
      link:'/pages/recognizewords/recognizewords'
    },
    {
      icon:'../../assets/grids/grid-2.png',
      name:'拼词',
      link:'/pages/spellcheck/spellcheck'
    },
    {
      icon:'../../assets/grids/grid-3.png',
      name:'听词',
      link:'/pages/listencheck/listencheck'
    },
    {
      icon:'../../assets/grids/grid-4.png',
      name:'自检',
      link:'/pages/selfcheck/selfcheck'
    }
  ],
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(App)
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

  }
})