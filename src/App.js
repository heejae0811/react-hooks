import useInput from './hooks/useInput'
import useTab from './hooks/useTab'
import './App.css'

const content = [
  {
    tab: 'section 01',
    content: 'content 01'
  },
  {
    tab: 'section 02',
    content: 'content 02'
  }
]

function App() {
  // useInput
  const maxLength = (value) => value.length <= 10
  const name = useInput('Mr.', maxLength)

  // useTab
  const {currentIndex, setCurrentIndex} = useTab(0, content)

  return (
    <div className="app">
      <section>
        <h3>useInput</h3>
        <input type="text" placeholder="write your name" {...name}/>
      </section>


      <section>
        <h3>useTab</h3>
        {
          content.map((section, index) => (
            <button onClick={() => setCurrentIndex(index)}>{section.tab}</button>
          ))
        }
        <div>{currentIndex.content}</div>
      </section>
    </div>
  )
}

export default App
