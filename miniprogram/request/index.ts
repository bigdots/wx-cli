import request from "./request"
import config from '../config/index'

// 1、静默授权 OVUS0001
function silentAuth() {
    return request({
        url: config.apiBaseUrl + '',
        method: 'POST',
        data: {
   
        },
      },
      false)
  }

  export const Request = {
    silentAuth
  }