import React, { useEffect } from 'react'
import { useState } from 'react'

import { Image } from '@/components/atoms/Image'

type SubmitReviewProps = {
  readonly onClose: () => void
}

export const SubmitReview: React.VFC<SubmitReviewProps> = ({ onClose }) => {
  const size = useWindowSize()

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    })

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      console.log('Width: ', window.innerWidth)
      console.log('Height: ', window.innerHeight)
    }

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Call handler right away so state gets updated with initial window size
        handleResize()

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
      }
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    rating: '',
    review: '',
  })
  const closeDlg = () => {
    onClose()
  }
  const submitReview = () => {
    onClose()
  }
  const handleChage = () => {}
  const style1 = { width: size.width, height: size.height - 80 }
  return (
    <div
      className="fixed top-[100px] md:top-[80px] left-0 flex flex-col flex-wrap p-5 items-center bg-[purple] bg-opacity-50 z-50 rounded-lg overflow-auto ease-out duration-500"
      style={style1}
    >
      <div className="w-full md:w-1/2 bg-[#222232] rounded-xl">
        <div className="flex flex-col flex-wrap w-full">
          <div
            className="ml-auto -mr-[16px] -mt-[16px] w-8 h-8 rounded-full p-1 bg-white cursor-pointer hover:scale-110"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col flex-wrap justify-center">
            <form onSubmit={submitReview}>
              <div className="mt-2 flex flex-row flex-nowrap items-center justify-center space-x-2">
                <div className="w-1/5 justify-center items-center">
                  <label className="w-full name">Name: </label>
                </div>
                <div className="w-3/5">
                  <input
                    className="w-full rounded-lg"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={toSend.name}
                    onChange={handleChage}
                    required
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap items-center justify-center space-x-2">
                <div className="w-1/5 justify-center items-center">
                  <label className="email w-full">Email: </label>
                </div>
                <div className="w-3/5">
                  <input
                    className="w-full rounded-lg"
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={toSend.email}
                    onChange={handleChage}
                    required
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap items-center justify-center space-x-2">
                <div className="w-1/5 justify-center items-center">
                  <label className="name w-full">Rating: </label>
                </div>
                <div className="w-3/5">
                  <input
                    className="w-full rounded-lg"
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    value={toSend.rating}
                    onChange={handleChage}
                    required
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap items-center justify-center space-x-2">
                <div className="w-1/5 justify-center items-center">
                  <label className="name w-full">Review: </label>
                </div>
                <div className="w-3/5">
                  <textarea
                    className="w-full rounded-lg"
                    name="review"
                    placeholder="Review"
                    value={toSend.review}
                    onChange={handleChage}
                    rows={7}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="btn-buyit w-2/3 sm:w-1/2 md:w-2/3 justify-center m-6">
                  <div
                    onClick={submitReview}
                    className="flex space-x-1 rounded-full py-2 px-3 gradient-btn-3 justify-center hover:cursor-pointer"
                  >
                    <svg
                      className="h-5 w-5 text-[#ff05ff] z-10"
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
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                    <span className="text-sm">Submit Your Review</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitReview
