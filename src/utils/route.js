import path from 'path'

/* 所有子集路由 */
const getChildrenRoutes = (router) => {
  const result = []
  router.forEach((router) => {
    if (router.children && router.children.length > 0) {
      result.push(...router.children)
    }
  })

  return result
}
/* 处理脱离层路由 */
export const filterRoutes = (router) => {
  // 所有子集路由
  const childrenRoutes = getChildrenRoutes(router)
  // 根据子集路由进行查重操作
  return router.filter((router) => {
    // 根据route在childrenRoutes中进行查重
    return !childrenRoutes.find((childrenRoutes) => {
      return childrenRoutes.path === router.path
    })
  })
}

function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

/* 根据routes(filterRoutes)数据,返回对应的menu规则数据 */
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    // 不存在children&&meth就不要了
    if (isNull(item.children) && isNull(item.meta)) return
    // 存在children 不存在meta 迭代generateMenus
    if (isNull(item.meta) && isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 不存在 children 存在 meta
    // 因为最终 menu需要进行跳转, 需要合并 path
    const routePath = path.resolve(basePath, item.path)
    // 路由分离之后, 可能存在 同名父路由的情况
    let route = result.find((item) => item.path === routePath)
    // 当前 路由没有加入到 result
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      // icon && title
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }

    // 存在 children && 存在 meta
    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
