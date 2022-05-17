export const successToast = (msg:string) => {
    wx.showToast({
      title: msg,
      icon: 'success',
      duration: 2000,
      fail() {
        console.error('调用wx.showToast失败')
      },
    })
  }
  
  export const errorToast = (msg:string) => {
    wx.showToast({
      title: msg,
      icon: 'error',
      duration: 2000,
      fail() {
        console.error('调用wx.showToast失败')
      },
    })
  }
  
  export const loadingToast = (msg = '加载中...', mask = false) => {
    wx.showLoading({
      title: msg,
      mask,
      fail() {
        console.error('调用wx.showLoading失败')
      },
    })
  }
  
  export const infoToast = (msg:string) => {
    wx.showToast({
      icon: 'none',
      title: msg,
      fail() {
        console.error('调用wx.showToast失败')
      },
    })
  }
  
  export const hideLoadingToast = () => {
    wx.hideLoading()
  }


  export const Toast = {
    'success': successToast,
    'error': errorToast,
    'loading':loadingToast,
    'info':infoToast,
    'hideLoading':hideLoadingToast
  } 
  

  