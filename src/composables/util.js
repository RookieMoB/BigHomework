import { ElNotification } from 'element-plus'

export function toast(title, message, type = 'success', dangerouslyUseHTMLString = false) {
  ElNotification({
    title,
    message,
    type,
    dangerouslyUseHTMLString,   // 表示使用 HTML 片段作为正文内容
    duration: 3000
  })
}