import React, { useRef} from 'react'
import { createUser } from '../context/AuthContext'



const Signup = () => {
 const emailRef = useRef()
 const usernameRef = useRef()
 const passwordRef = useRef()  

  const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        console.log(email,username,password)
        try{
          return createUser(email,password)
        } catch (error) {
          alert(error.message)
        }

  }
  return (
    <div>
      <div>
       <div className='place-content-center p-10'>

<div
  class="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden "
>
  <div class="relative hidden xl:block xl:w-1/2 h-full">
    <img
      class="absolute h-auto w-full object-cover"
      src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      alt="my zomato"
    />
  </div>
  <div class="w-full xl:w-3/4 p-4">
    <form onSubmit={handleSubmit} method="post" action="#">
      <h1 class=" text-2xl font-bold">Sign up for an account</h1>
      <div>
        <span class="text-gray-600 text-sm">
          Already have an account?
        </span>
        <span class="text-gray-700 text-sm font-semibold">
          Sign in
        </span>
      </div>
      <div class="mb-2 mt-2">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="email"
          ref={emailRef}
          type="text"
          placeholder="Your email address"
        />
            <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Username
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="username"
          type="text"
          ref={usernameRef}
          placeholder="Your username"
        />
      </div>
      <div class="mb-2 mt-2">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="password"
          ref={passwordRef}
          type="password"
          placeholder="Your password"
        />
         <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Confirm Password
        </label>
        <input
          class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="confirm-password"
          type="password"
          placeholder="Confirm password"
        />
   
      </div>
      <div class="flex w-full mt-8">
        <button
          class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="submit"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Signup