import {useEffect} from 'react'

const useMouseLeave = (onMouseLeave) => {
  const handle = () => {
    console.log('마우스가 화면을 벗어났습니다.')
  }

  useEffect(() => {
    if(typeof onMouseLeave !== 'function') {
      return
    }

    document.addEventListener('mouseleave', handle)
    return () => document.removeEventListener('mouseleave', handle)
  }, [])
}

export default useMouseLeave