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
  app Notes sederhana by <span>
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

      <a
  className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  Add Note
</a>
    </div>
  </div>
</header>
        </div>
    )
}
 export default Navbar;