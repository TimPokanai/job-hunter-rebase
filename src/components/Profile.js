import React from 'react';
import {MdArrowBack} from 'react-icons/md';

function Profile() {
  return (
    <div className="flex flex-col mx-5">
        <div className="flex flex-row justify-between mx-5 my-3 items-center">
        <h2 className="text-2xl font-bold">Profile</h2>
        <button className="border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%]">
            <MdArrowBack className="text-[150%] text-gray-500"></MdArrowBack>
        </button>
        </div>
        <form className="flex-col">
            <div className="mb-6">
                <label htmlFor="openAIKey" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your OpenAI Key
                </label>
                <input id="openAIKey" name="openAIKey" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-grey-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="sk-...1234" required>
                </input>
            </div>
            <div className="mb-6">
                <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Resume
                </label>
                <textarea id="resume" name="resume" rows={8} className="block p-2.5 w-full text-sm bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-grey-400 dark:text-white" placeholder="Paste Your Resume Here...">           
                </textarea>
            </div>
            <div className="mb-6 text-center">
                <button type="submit" className="border-2 border-solid border-blue-500 text-blue-500 text-lg rounded-md px-5 py-2 hover:text-white hover:bg-blue-500">
                    Save
                </button>
            </div>
        </form>
        <div className="flex mx-5">

        </div>
    </div>
  )
}

export default Profile
