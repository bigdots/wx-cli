import Wxp from "./wxp"

/**
 * 登录的单例类
 *
 */
interface LoginInfo {
    invalidTime: string | number
    outerNo: string | number
    sessionId: string | number
  }
  
  export default class SlientLoginManage {
    static _loginInfo: LoginInfo
    static _loginPromise: Promise<LoginInfo>
  
    /**
     * 登录是否失效
     * @returns
     */
    static isValid() {
      console.debug(this._loginInfo)
      if (!this._loginInfo || !this._loginInfo.invalidTime) {
        return false
      }
  
      const now = new Date().getTime()
      if (now > this._loginInfo.invalidTime) {
        return false
      }
      return true
    }
  
    /**
     * 获取登录信息
     * @returns
     */
    static async getLoginInfo() {
      const isValid = this.isValid()
      console.debug('登录是否有效', isValid)
      if (!isValid) {
        this._loginInfo = await this.loginPromise
      }
  
      return this._loginInfo
    }
  
    /**
     * 静默登录接口
     * @returns sessionID outerNo invalidTime
     */
    static async _login() {
      // const res = await  Wxp.login()
      // const res1 = await wx['ajax'].silentAuth(res.code)
      // return {
      //   ...res1.data,
      //   invalidTime: res1.invalidTime,
      // }

    }
  
    static get loginPromise(): Promise<LoginInfo> {
      if (!this._loginPromise) {
        // 整个项目流程中，只实例化这一个静默授权promsie
        this._loginPromise = this._login()
      }
  
      return this._loginPromise
    }
  }
  