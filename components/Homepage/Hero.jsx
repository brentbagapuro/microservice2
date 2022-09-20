import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className="px-8 py-44 w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/green-leaves.jpg')`,
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-white text-center font-sans font-bold max-w-[50rem] mb-8 text-xl sm:text-4xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
          dolorem.
        </h2>
        <button className="rounded bg-secondary px-4 py-2 text-white">
          <Link href="#">
            <span>Learn more</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Hero
