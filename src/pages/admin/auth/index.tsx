import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { userService } from '@/services/user'
const Login: React.VFC = () => {
  const [cookie, setCookie] = useCookies(['user'])

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm()
  const { errors } = formState
  const submitRef = useRef<HTMLButtonElement>(null)
  const handleChange = () => {}
  // const keyPressEvent = (e) => {
  //   if (e.key === 'Enter' || e.keyCode === 13) {
  //     handleSubmit(onSubmit) // this won't be triggered
  //   }
  // }
  const onSubmit = async () => {
    console.log('Submitted')
    let user = await userService.login(email, password)
    if (user) {
      setCookie('user', JSON.stringify(user), {
        path: '/',
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      })
      router.push({
        pathname: '/admin',
      })
    }
  }

  return (
    <div className="login-container flex w-full min-h-screen items-center justify-center bg-[url('/img/bg_auth.jpg')] bg-cover py-10 px-3 md:px-10">
      <div className="flex w-[500px] md:h-4/5 bg-black bg-opacity-20 rounded-xl">
        <div className="flex flex-col flex-wrap w-full p-4 ls:p-12">
          <div className="mt-4 flex w-full items-center justify-center">
            <div className="w-[220px] h-[50px] ls:w-[250px] ls:h-[70px] relative">
              <Image
                src="/Goread_Logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(() => onSubmit())}>
            <div className="mt-10 flex flex-col flex-wrap w-full form-group">
              <div className="w-full">
                <span className="absolute z-10 mt-6 ml-4">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  className="w-full pl-16 text-black"
                  {...register('email')}
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full h-7">
                <span>
                  <span className="text-sm font-bold text-gray-800">
                    {errors['email']?.message && (
                      <p>{errors['email']?.message}</p>
                    )}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full form-group">
              <div className="w-full">
                <span className="absolute z-10 mt-6 ml-4">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" />{' '}
                    <circle cx="8" cy="15" r="4" />{' '}
                    <line x1="10.85" y1="12.15" x2="19" y2="4" />{' '}
                    <line x1="18" y1="5" x2="20" y2="7" />{' '}
                    <line x1="15" y1="8" x2="17" y2="10" />
                  </svg>
                </span>
                <input
                  className="w-full p-3 text-black"
                  {...register('password')}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full h-7 font-bold">
                <span>
                  <span className="text-sm text-gray-800">
                    {errors['password']?.message && (
                      <p>{errors['password']?.message}</p>
                    )}
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap space-y-3 flex-col ls:flex-row ls:flex-nowrap ls:space-y-0 w-full">
              <div className="flex items-center justify-center ls:justify-start hover:cursor-pointer">
                <input
                  name="rememberMe"
                  className="p-3 text-black w-4 h-4"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span
                  onClick={() => setRememberMe(!rememberMe)}
                  className="ml-2"
                >
                  Remember me
                </span>
              </div>
              <div className="flex ls:ml-auto items-center justify-center ls:justify-start">
                <span className="ml-2 text-[14px] text-gray-200 hover:cursor-pointer">
                  Forgot password
                </span>
              </div>
            </div>
            <div className="mt-12 flex w-full">
              <div className="flex items-center justify-center w-full form-group">
                <input
                  type="submit"
                  className="flex w-full h-[50px] rounded-full gradient-login-btn text-center items-center justify-center"
                  value="LOGIN"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
function userRouter() {
  throw new Error('Function not implemented.')
}
