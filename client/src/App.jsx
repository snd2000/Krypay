import { Navbar, Welcome, Footer, Services, Transactions ,Teams} from './components'
const App = () => {

  return (
    <div className="min-h-screen">
      <div className = "gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Teams />
      <Footer />
    </div>
  )
}

export default App