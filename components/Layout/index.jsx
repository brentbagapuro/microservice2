import { useState, useRef } from 'react'
import Navbar from './Navbar'
import MobileNavDrawer from './MobileNavDrawer'

const navLinks = [
  {
    label: 'About',
    url: '#',
  },
  {
    label: 'Contact',
    url: '#',
  },
]

const Layout = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const drawer = useRef()
  const top = useRef()
  const middle = useRef()
  const bottom = useRef()
  const mainDiv = useRef()

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen)
    drawer.current.classList.toggle('-translate-x-full')
    drawer.current.classList.toggle('translate-x-0')

    mainDiv.current.classList.toggle('filter')
    mainDiv.current.classList.toggle('backdrop-brightness-75')
    mainDiv.current.classList.toggle('brightness-75')
  }

  const burgerToX = () => {
    top.current.classList.toggle('rotate-45')
    top.current.classList.toggle('translate-y-[8px]')

    middle.current.classList.toggle('rotate-45')

    bottom.current.classList.toggle('-rotate-45')
    bottom.current.classList.toggle('translate-y-[-8px]')
  }

  const bodyClick = () => {
    if (drawerIsOpen) {
      toggleDrawer()
      burgerToX()
    }
  }

  return (
    <>
      <div className="flex flex-col" ref={mainDiv} onClick={bodyClick}>
        <Navbar
          navLinks={navLinks}
          top={top}
          middle={middle}
          bottom={bottom}
          toggleDrawer={toggleDrawer}
          burgerToX={burgerToX}
          drawerIsOpen={drawerIsOpen}
        />
        <main className="min-h-[95vh]">{children}</main>
        {/* <Footer /> */}
      </div>
      <MobileNavDrawer drawerRef={drawer} navLinks={navLinks} />
    </>
  )
}

export default Layout
