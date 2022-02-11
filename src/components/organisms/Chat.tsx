import React, { useEffect } from 'react'
import { useState } from 'react'

import { Image } from '@/components/atoms/Image'

export const Chat: React.VFC = () => {
  const [showDlg, setShowDlg] = useState(false)
  const [hiddenDlg, setHiddenDlg] = useState(true)
  const [chatShow, setChatShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    phone_number: '',
    message: '',
    reply_to: '',
  })

  useEffect(() => {
    setTimeout(() => {
      setChatShow(true)
    }, 1500)
  })

  const onSubmit = () => {}

  const handleChange = () => {}

  const toggleShowDlg = () => {
    if (showDlg === false) {
      setHiddenDlg(false)
      const timer = setTimeout(() => {
        setShowDlg(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowDlg(false)
      const timer = setTimeout(() => {
        setHiddenDlg(true)
      }, 700)
      return () => clearTimeout(timer)
    }
  }

  return (
    <div
      className={`md:p-2 lg:p-2 fixed z-50 right-0 bottom-0 ${
        chatShow ? 'opacity-100' : 'opacity-0'
      } transition ease-in-out duration-1000`}
    >
      <div
        className={`${
          showDlg
            ? 'transition ease-in-out delay-150  scale-100 opacity-100 duration-500 block'
            : 'transition ease-in-out delay-150 translate-y-1/4 translate-x-1/4 scale-50 opacity-0 duration-500'
        }
                            ${hiddenDlg ? 'hidden' : 'block'}
                            bg-[#f15d23] w-full h-screen md:w-80 md:h-[400px] overflow-auto p-4 md:rounded-md lg:rounded-md shadow-lg shadow-black`}
      >
        <div className=" min-h-full flex items-center">
          <form onSubmit={onSubmit}>
            <div
              className="float-right w-6 h-6 bg-transparent block md:hidden mb-2"
              onClick={toggleShowDlg}
            >
              <Image
                src="/img/close.png"
                alt="Close"
                width="50px"
                height="50px"
              />
            </div>
            <label
              className={`${
                success ? 'block' : 'hidden'
              } w-full text-center text-green-400 font-extrabold`}
            >
              Email Sent
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 my-1 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <input
              type="email"
              placeholder="Your email"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 my-1 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <input
              type="text"
              name="phone_number"
              value={toSend.phone_number}
              onChange={handleChange}
              placeholder="Your phone"
              className="w-full px-3 py-2 my-1 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              value={toSend.message}
              onChange={handleChange}
              className="w-full px-3 py-2 my-1 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
            <div className="my-1">
              <button
                type="submit"
                className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md transition duration-500 hover:bg-indigo-800 focus:bg-indigo-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`${
          showDlg ? 'hidden md:flex' : ''
        } w-14 h-14 m-2 float-right relative cursor-pointer`}
        onClick={toggleShowDlg}
      >
        <span
          className={`${
            showDlg ? 'hidden' : ''
          } animate-ping absolute top-0 inline-flex h-full w-full rounded-full bg-transparent border-2 border-rose-800 opacity-100`}
        ></span>
        <div
          className={
            'h-full w-full bg-[#f15d23]  rounded-full shadow-md shadow-black flex justify-center items-center '
          }
        >
          <svg
            width="24"
            height="27"
            viewBox="0 0 16 14"
            className={`${
              showDlg
                ? 'transition ease-in-out delay-150  scale-100 opacity-100 duration-500'
                : 'transition ease-in-out delay-150 translate-y-1/4 scale-50 opacity-0 duration-500'
            } absolute`}
          >
            <path
              fill="#FFFFFF"
              fillRule="evenodd"
              d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"
            >
              {' '}
            </path>
          </svg>
          <svg
            className="h-6 w-6 text-white"
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
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />{' '}
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Chat
