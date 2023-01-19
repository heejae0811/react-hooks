import {useState} from 'react'

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  // isArray: 인자가 배열인지 ture/false로 판별한다.
  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }

  return {
    currentIndex: allTabs[currentIndex],
    setCurrentIndex
  }
}

export default useTab