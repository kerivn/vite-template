import Axios from 'axios'

const baseURL = 'https://api.github.com'

const instance = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      // const code = error.response.status
      // const msg = error.response.data.message
      console.error(`[Axios Error]`, error.response)
    } else {
      console.error(error)
    }
    return Promise.reject(error)
  }
)

// 请求工具函数
const request = (url, method = 'get', submitData) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    // 1. 如果是get请求  使用params来传递submitData   (?a=10&c=10)
    // 2. 如果不是get请求  使用data来传递submitData   (请求体传参)
    // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
    // method参数：get,Get,GET  转换成小写再来判断
    // 在对象，['params']:submitData ===== params:submitData 这样理解
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request

/*
// 传统的写法，请求参数要区分 params 和 data
axios({
  url: '请求地址',
  method: 'GET',
  params: 请求参数
})

axios({
  url: '请求地址',
  method: 'POST',
  data: 请求参数
})

*/
