import useInput from './hooks/useInput'
import useTab from './hooks/useTab'
import useTitle from './hooks/useTitle'
import useClick from './hooks/useClick'
import useHover from './hooks/useHover'
import useConfirm from './hooks/useConfirm'
import './App.css'

const content = [
  {
    tab: 'section1',
    content: 'content 1'
  },
  {
    tab: 'section2',
    content: 'content 2'
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

  // useClick, useHover
  const alertOpen1 = () => alert('Click Success.')
  const alertOpen2 = () => alert('Hover Success.')
  const clickButton = useClick(alertOpen1)
  const hoverButton = useHover(alertOpen2)

  // useConfirm
  const deleteMessage = () => alert('Delete')
  const cancleessage = () => alert('Cancle')
  const confirmAlert = useConfirm('Are you sure?', deleteMessage, cancleessage)

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
        <h3>useClick / useHover</h3>
        <button ref={clickButton}>Click Me!</button>
        <button ref={hoverButton}>Hover Me!</button>
      </section>

      <section>
        <h3>useConfirm</h3>
        <button onClick={confirmAlert}>Delete</button>
      </section>
    </div>
  )
}

export default App
