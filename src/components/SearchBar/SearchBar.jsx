import React from 'react'

function SearchBar() {
    return(
<div className="SearchBar">

<section className="bg-white">
  <div className="p-8 md:p-12 lg:px-16 lg:py-6">

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">Email</label>

          <input
            type="email"
            placeholder="Search Note"
            className="border w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 transition hover:scale-10 hover:shadow-xl focus:border-white focus:outline-none focus:ring focus:active:text-indigo-500"
          />
        </div>
      </form>
    </div>
  </div>
</section>
        </div>
    )
}

export default SearchBar