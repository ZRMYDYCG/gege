import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
               <main>
                   <Outlet />
               </main>
            <Footer />
        </>
    )
}

export default Layout
