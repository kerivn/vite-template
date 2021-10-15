import request from '@/utils/request'

/**
 * 请求示例
 * @returns Promise
 */
export const apiGetDemo = () => {
  return request('/users/kervin', 'get')
}
