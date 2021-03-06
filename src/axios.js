import axios from 'axios'

axios.defaults.baseURL = 'http://pay-center/'
// 设置ajax请求头标志，后台判断ajax请求依据
axios.defaults.headers.common['x-requested-with'] = 'XMLHttpRequest'
// 设置ajax请求体类型
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// 跨域请求设置
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.withCredentials = true
// 返回结果拦截器，全局处理未登录状态
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    let data = response.data
    if (data.code === '000005') {
      alert(data.msg)
    }
    return response
  } else {
    console.error('http请求失败')
  }
})

export default axios
