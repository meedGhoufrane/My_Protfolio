import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"

import 'react-toastify/dist/ReactToastify.css'
// import Education from './components/Education/Education'
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      {/* <Education/> */}
      <Main></Main>
      <Analytics />
      <Footer></Footer>
    </>
  )
}

export default App
