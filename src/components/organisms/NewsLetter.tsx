export const NewsLetter: React.VFC = () => {
  return (
    <div className="flex flex-col w-full -mt-[150px]">
      <div className="flex p-6 flex-wrap w-full ml:flex-nowrap ml:flex-row rounded-[30px] bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 min-h-[196px]">
        <div className="m-auto flex flex-wrap">
          <h3 className="flex text-4xl font-bold text-white w-full">
            Newsletters
          </h3>
          <p className="flex text-white">
            Most popular Instagram marketing site
          </p>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-full">
            <input
              placeholder="Enter Email Address"
              className="w-full p-4 md:p-8 rounded-full focus:outline-none"
            ></input>
            <div className="flex space-x-2 absolute ml-auto -mt-[50px] md:-mt-[80px] mr-1 md:mr-3 rounded-full p-3 md:p-6 w-[135px] md:w-[172px] gradient-btn-1 items-center justify-center hover:cursor-pointer">
              <svg
                className="h-5 w-5 text-white z-10"
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
              <span className="text-sm md:text-base">Browse More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
