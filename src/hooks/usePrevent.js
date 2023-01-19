const usePrevent = () => {
  const listener = (event) => {
    event.preventDefault()
    event.returnValue = ''
  }

  // beforeunload: 사용자가 페이지를 떠날 때 발생하는 이벤트 (변경사항이 저장되지 않을 수 있습니다.)
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener)
  }

  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener)
  }

  return {enablePrevent, disablePrevent}
}

export default usePrevent