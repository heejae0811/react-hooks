import {useState} from 'react'

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    const {
      target: {value}
    } = event

    let willUpdate = true

    // typeof: 자료형(number, string, boolean..)을 나타내는 문자열을 반환한다.
    if (typeof validator === 'function') {
      willUpdate = validator(value)
    }

    if (willUpdate) {
      setValue(value)
    }
  }

  return {value, onChange}
}

export default useInput