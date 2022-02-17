export const Banner: React.VFC = () => (
  <div className="flex flex-col w-full min-h-screen items-center justify-center flex-wrap md:flex-row md:flex-nowrap md:space-x-2 bg-[#222232]">
    <div className="flex flex-col pt-20 md:pt-0 px-10 z-[20]">
      <div className="flex-none md:w-5/12 md:h-auto">
        <h1 className="text-4xl font-medium max-w-full flex flex-wrap">
          <span className="text-white">Super Real Instagram </span>
          <span>
            <span className="text-white">
              followers, likes, power likes, views, comments,&nbsp;
            </span>

            <br></br>
            <span className="whitespace-nowrap text-white">
              <span className="text-white">saves&nbsp;</span>
              <span className="whitespace-nowrap">in Minutes</span>
            </span>
          </span>
        </h1>
      </div>
      <p className="flex md:w-5/12 text-white">
        Instagram is one of the best social media platforms to reach millions of
        followers. Buying active and real Instagram increase your network of
        followers naturally. Not only this but you will also save your precious
        time and get the job done in an effortless manner.
      </p>
      <div className="flex flex-wrap items-center mt-10 md:mt-24 px-2 flex-col space-y-2 dm:flex-row dm:flex-nowrap dm:items-center dm:space-x-2 dm:space-y-0 lg:px-0">
        <div className="flex space-x-2 absolute w-[250px] dm:w-[240px] rounded-full p-3 gradient-btn items-center justify-center hover:cursor-pointer">
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
          <span className="text-sm md:text-base">Buy Instagram Followers</span>
        </div>{' '}
        <div className="flex space-x-2 absolute w-[250px] dm:w-[210px] rounded-full p-3 gradient-btn items-center justify-center hover:cursor-pointer">
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
          <span className="text-sm md:text-base">Buy Instagram Likes</span>
        </div>{' '}
        <div className="flex space-x-2 absolute w-[250px] dm:w-[240px] rounded-full p-3 gradient-btn items-center justify-center hover:cursor-pointer">
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
          <span className="text-sm md:text-base">Buy Instagram Comments</span>
        </div>
      </div>
      <br></br>
    </div>
    <div className="hidden md:flex md:w-2/5 justify-center bannerimg right-10 mt-16">
      <div className="w-full">
        <img
          // className=""
          // className="absolute"
          src="/img/header_top.png"
          alt="bannerImage"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
)
