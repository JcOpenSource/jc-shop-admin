/**
 * common.ts的类型
*/

export interface ILoginInfo {
  logo_square: string
  logo_rectangle: string
  login_logo: string
  slide: string[]
}

// 用户信息
export interface IUserInfo {
  id: number
  account: string
  head_pic: string
}

// 菜单
export interface IMenu {
  path: string
  title: string
  icon: string
  header: string
  is_header: number
  children?: IMenu
}

export interface ILoginResponse {
  token: string
  expires_time: number
  meuns: IMenu[]
  unique_auth: string[]
  user_info: IUserInfo
  logo: string
  logo_square: string
  version: string
  newOrderAudioLink: string
}

export interface IlogoutResponse {
  status: number
  msg: string
}
