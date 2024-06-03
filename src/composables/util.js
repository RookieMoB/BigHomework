import { ElNotification, ElMessageBox } from 'element-plus'
import nProgress from 'nprogress'


// 消息提示
export function toast(title, message, type = 'success', dangerouslyUseHTMLString = false) {
  ElNotification({
    title,
    message,
    type,
    dangerouslyUseHTMLString,   // 表示使用 HTML 片段作为正文内容
    duration: 3000
  })
}

// 退出登录
export function showModel(title = '', content = '提示内容', type = 'warning') {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type,
    }
  )
}

// 显示全屏 loading
export function showFullLoading() {
  nProgress.start()
}

// 隐藏全屏 loading
export function hideFullLoading() {
  nProgress.done()
}