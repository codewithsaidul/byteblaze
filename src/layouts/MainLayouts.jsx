
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'


function MainLayouts() {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>

      <div className='min-h-[calc(100vh-116px)]'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayouts