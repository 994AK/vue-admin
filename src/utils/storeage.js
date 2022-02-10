/* 存储数据 */
export const setItem = (key, value) => {
  /* value: 1.基本类型 2.复杂类型 */
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/* 获取数据 */
export const getItem = (key) => {
  // 获取存储的数据
  const data = window.localStorage.getItem(key)
  try {
    /* 转换数据成功 */
    return JSON.parse(data)
  } catch (err) {
    /* 转换数据失败 */
    return data
  }
}

/* 删除指定数据 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
/* 删除所有数据 */
export const removeAllItems = () => {
  window.localStorage.clear()
}
