import React from 'react'

function Navbar() {
  return (
    <div className="Navbar">
      <header className="border-b border-gray-200 bg-indigo-500">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Notes App</h1>

              <p className="mt-1.5 text-sm text-white">
                app Notes created by <span>
                  <a
                    href="https://instagram.com/mjfardani_"
                    className="text-white hover:text-blue-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @mjfardani_ ☕
                  </a></span>
              </p>

            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Navbar;