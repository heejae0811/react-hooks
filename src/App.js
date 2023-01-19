import useInput from './hooks/useInput'
import useTab from './hooks/useTab'
import useTitle from './hooks/useTitle'
import useClick from './hooks/useClick'
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

  // useTitle
  const titleUpdater = useTitle('Loading..')
  setTimeout(() => titleUpdater('React Hooks'), 2000)

  // useClick
  const alertOpen = () => alert('Click Success.')
  const title = useClick(alertOpen)

  return (
    <div className="app">
      <section>
        <h3>useInput</h3>
        <input type="text" placeholder="Write your name" {...name}/>
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

      <section>
        <h3>useClick</h3>
        <button ref={title}>Click Me!</button>
      </section>
    </div>
  )
}

export default App
