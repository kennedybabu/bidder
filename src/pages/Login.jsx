import React,{ useRef} from 'react'
import { loginUser } from '../context/AuthContext'

const Login = () => {
 const emailRef = useRef()
 const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value
    console.log(email,password)
    try{
      return loginUser(email,password)
    } catch (error) {
      alert(error.message)
    }

}
  return (
    <div>
       <div className='place-content-center p-8'>

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
    <form onSubmit={handleSubmit} method="post" action="#" >
      <h1 class=" text-2xl font-bold">Sign in to your account</h1>
      <div>
        <span class="text-gray-600 text-sm">
          Don't have an account?
        </span>
        <span class="text-gray-700 text-sm font-semibold">
          Sign up
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
          type="text"
          ref={emailRef}
          placeholder="Your email address"
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
          type="password"
          ref={passwordRef}
          placeholder="Your password"
        />
        <a
          class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
          href="/forgot"
        >
          Forgot Password?
        </a>
      </div>
      <div class="flex w-full mt-8">
        <button
          class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
    </div>
  )
}


export default Login