import Link from 'next/link'

const MobileNavDrawer = ({ drawerRef, navLinks }) => (
  <div
    className="h-full w-[18rem] fixed bg-white top-0 left-0 drop-shadow-2xl origin-left -translate-x-full ease-in-out duration-200 lg:hidden"
    ref={drawerRef}
  >
    <div className="p-4">
      <h2 className="font-bold text-2xl">Microservice2</h2>
    </div>
    <nav>
      {navLinks.map((link, i) => {
        return (
          <div
            className="p-4 text-xl border-y-[1px] border-gray-250 active:bg-gray-200"
            key={i}
          >
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
          </div>
        )
      })}
    </nav>
  </div>
)

export default MobileNavDrawer
