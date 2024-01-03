import * as React from "react"
import logoImg from '../../assets/logo.png'
import leftArrowImg from '../../assets/leftArrow.png'

const Header:React.FC = () => {
  return (
    <header>
        <nav className="navbar bg-neutral rounded-md shadow-md bg-opacity-95 p-3">
            <div className="flex-none mx-1 md:mx-3">
            <label htmlFor="my-drawer" className="btn btn-outline btn-accent ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
              
            </div>
            <div className="flex-1">
              <a href="/" className="btn btn-outline btn-accent  shadow-none ">
                <img className="w-7 sm:w-10" src={logoImg} alt="" />
                <h1 className="text-lg sm:text-xl">Doğuhan Book Store</h1>
              </a>
            </div>
            <div className="flex-none hidden sm:block mx-1 md:mx-3">
            <label htmlFor="my-drawer" className="btn btn-ghost ">
              <img className="w-3" src={leftArrowImg} alt="" />
              <span className="text-lg text-green-500 ">All</span>
              </label>
            </div>
        </nav>
    </header>
  )
}

export default Header