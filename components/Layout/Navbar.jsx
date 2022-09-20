import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = ({
  navLinks,
  top,
  middle,
  bottom,
  toggleDrawer,
  burgerToX,
  drawerIsOpen,
}) => {
  const [screenWidth, setScreenWidth] = useState()
  const { data } = useSession()
  console.log(data)
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    if (screenWidth >= 1024 && drawerIsOpen) {
      toggleDrawer()
      burgerToX()
    }
  }, [screenWidth, toggleDrawer, burgerToX, drawerIsOpen])

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth)
  }

  return (
    <div className="w-full bg-primary">
      <div className="max-w-[1280px] m-auto p-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <h2 className="text-white font-bold text-2xl">Microservice2</h2>
        </div>
        <nav className="flex items-center">
          <ul className="space-x-8 text-white hidden lg:flex">
            {navLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link href={link.url}>
                    <a className="list-none">{link.label}</a>
                  </Link>
                </li>
              )
            })}
            {data ? (
              <li className="cursor-pointer" onClick={() => signOut()}>
                Sign Out
              </li>
            ) : (
              <li className="cursor-pointer" onClick={() => signIn()}>
                Sign In
              </li>
            )}
          </ul>

          <div
            className="block cursor-pointer lg:hidden"
            onClick={(e) => {
              e.stopPropagation()
              toggleDrawer()
              burgerToX()
            }}
          >
            <div
              className="h-[2px] w-[20px] bg-white rounded-full mb-1.5 transform transition duration-300 ease-out"
              ref={top}
            />
            <div
              className="h-[2px] w-[20px] bg-white rounded-full transform transition duration-300 ease-out"
              ref={middle}
            />
            <div
              className="h-[2px] w-[20px] bg-white rounded-full mt-1.5 transform transition duration-300 ease-out"
              ref={bottom}
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
