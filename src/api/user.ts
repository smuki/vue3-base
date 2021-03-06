import API from './axios'
import ApiList from './apiList'

const { user } = ApiList

interface HttpParams {
  coinName: string
  cashName: string
}

/**
 * @interface loginParams -登录参数
 * @property {string} userName -用户名
 * @property {string} password -用户密码
 */
interface loginParams {
  userName: string
  password: string
}

/**
 * @interface registerParams -登录参数
 * @property {string} confirmPassword -确认密码
 * @property {string} validateCode -验证码
 */
interface registerParams extends loginParams {
  confirmPassword: string
  validateCode: string
}

export interface UserApi {
  coin2cash(param: HttpParams): Promise<any>
}

/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
class User {
  static async register(params: registerParams): Promise<any> {
    return await API({
      method: user.register.method,
      url: user.register.url,
      responseType: user.register.resType
    })
  }

  static async login(params: loginParams): Promise<any> {
    return await API({
      method: user.login.method,
      url: user.login.url,
      responseType: user.login.resType,
      data: {
        ...params
      }
    })
  }
}

export default User
