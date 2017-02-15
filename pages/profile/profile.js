// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',
    userInfo: {
      wechat: 'lg_wolf',
      nickName: 'wolf',
      avatarUrl: '../../images/qrcode.png'
    }
  },

  getUserInfo () {
    this.setData({ userInfo: {avatarUrl: '../../images/qrcode.png'} })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    const that = this
    app.wechat.login().then(res => {
        if (res.code) {
          app.wechat.getUserInfo().then(res => {
            that.setData({ userInfo: res.userInfo })
          })
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
