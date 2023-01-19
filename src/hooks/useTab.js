import {useState} from 'react'

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }

  return {
    currentIndex: allTabs[currentIndex],
    setCurrentIndex
  }
}

export default useTab