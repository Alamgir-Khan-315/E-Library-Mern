import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const navLinkBase = "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
  const navLinkActive = "text-gray-900"
  const buttonBase = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <div className="h-8 w-8 rounded-md bg-indigo-600 text-white grid place-items-center font-bold">E</div>
              <span className="text-base sm:text-lg font-semibold text-gray-900">E‑Library</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Home</NavLink>
            <NavLink to="/log_in" className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Library</NavLink>
            <NavLink to="/log_in" className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Departments</NavLink>
            <NavLink to="/log_in" className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Profile</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/log_in"
              className={`${buttonBase} bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 hidden sm:inline-flex`}
              onClick={closeMobileMenu}
            >
              Log in
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t bg-white/95 backdrop-blur`}> 
        <div className="px-4 pt-2 pb-4 space-y-1">
        
          <NavLink to="/" className={({ isActive }) => `block rounded-md px-3 py-2 ${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Home</NavLink>
          <NavLink to="/log_in" className={({ isActive }) => `block rounded-md px-3 py-2 ${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Library</NavLink>
          <NavLink to="/log_in" className={({ isActive }) => `block rounded-md px-3 py-2 ${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Departments</NavLink>
          <NavLink to="/log_in" className={({ isActive }) => `block rounded-md px-3 py-2 ${navLinkBase} ${isActive ? navLinkActive : ''}`}  end >Profile</NavLink>
         
          <div className="pt-2">
            <Link
              to="/log_in"
              className={`${buttonBase} w-full bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600`}
              onClick={closeMobileMenu}
            >
               Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar