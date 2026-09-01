import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import AssistantCard from '../components/AssistantCard'
import Footer from '../components/Footer'

function Home() {

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          PAGE LAYOUT
      ========================= */}

      <div className="page-layout">

        {/* SIDEBAR */}

        <Sidebar />


        {/* MAIN CONTENT */}

        <main className="main-content">

          <Hero />

          <AssistantCard />

        </main>

      </div>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </div>
  )
}

export default Home