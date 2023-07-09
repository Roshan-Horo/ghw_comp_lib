import './App.css'
import * as Btn from './components/Button'
// import Header from './components/Header'
// import Footer from './components/Footer'
import TestArea from './TestArea'
// import {Button} from 'test_component_lib'

export default function App() {

  return (
    <>
      {/* <Header /> */}
      <main>
        <Btn onClick={() => console.log('hello button')}>GoodBye</Btn>
      </main>
      {/* <Footer /> */}
      <TestArea>
        <Button>Good Bye</Button>
      </TestArea>
    </>
  )
}
