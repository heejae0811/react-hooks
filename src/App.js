import useInput from './hooks/useInput'
import './App.css'

function App() {
  const maxLength = (value) => value.length <= 10
  const name = useInput('Mr.', maxLength)

  return (
    <div className="App">
      <input type="text" placeholder="write your name" {...name}/>
    </div>
  )
}

export default App
