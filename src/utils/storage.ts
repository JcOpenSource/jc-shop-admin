// store 存储封装
export const getItem = <T>(key: string): T | null => {
  const data = window.localStorage.getItem(key)
  if (data == null) return null
  try {
    // 不是标准的字符串转换会变异常
    return JSON.parse(data) as T
  } catch (err) {
    return null
  }
}

// 使用自主推断类型
getItem<string>('asdfsdf')

export const setItem = (key: string, value: object | string | null) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
