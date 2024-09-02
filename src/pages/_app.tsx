import { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = ({ Component }: AppProps) => {
  return (<>
    <Header />
    <main>
      <Component />
    </main>
    <Footer />
  </>)
}

export default App

