'use client';
import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div className="absolute top-0 left-0 w-full h-96 blue-3xl -z-50" />
        {/* <Image
          src="https://link.papareact.com/c2cdd5"
          alt="header"
          width={300}
          height={100}
          className="w-44 md:w-56 pd-10 md:pb-0 object-contain"
        /> */}
        <p>Trello</p>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/*searchbar*/}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            {/* <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" /> */}
            <input
              type="text"
              placeholder="search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              search
            </button>
          </form>
          {/*avatar*/}
          <Avatar name="Dawa Sherpa" round color="blue" size="50" />
        </div>
      </div>

      <div className="flex items-center p-5 justify-center md:my-5 rounded-xl w-fit bg-white max-w-3xl">
        <p className="text">GPT is sumarizing your tasks for the day...</p>
      </div>
    </header>
  );
}

export default Header;
