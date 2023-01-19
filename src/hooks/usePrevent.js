// TODO :: 왜 안될까..?
const usePrevent = () => {
  const listener = (event) => {
    event.preventDefault()
    event.returnValue = ''
  }

  const enablePrevent = () => {
    window.addEventListener('beforeunload?', listener)
    console.log('prevent')
  }

  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener)
    console.log('unprevent')
  }

  return {enablePrevent, disablePrevent}
}

export default usePrevent