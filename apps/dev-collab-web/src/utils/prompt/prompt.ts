export const usePrompt = () => {
  const alert = (msg: string) => {
    window.alert(msg)
  }

  const confirm = async (msg: string) => {
    return window.confirm(msg)
  }

  return { alert, confirm }
}
