import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';

export default function SearchBox() {
  return (
    <div>
      <form className="flex">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            disabled
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full pl-10 p-2.5"
            placeholder="Search"
            required=""
          ></input>
        </div>
        <button
          type="submit"
          className="bg-white p-2.5 ml-2 text-sm font-medium text-white rounded-lg border border-slate-800 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <SearchIcon className="h-5 w-5 text-slate-800" />
        </button>
      </form>
    </div>
  );
}
