type Props = {
  readonly submitClicked: (any) => void
}
export const InstagramAccount: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full md:bg-[#222232] md:rounded-none md:p-0 ml:px-14">
      <div className="flex flex-col flex-wrap w-full py-3 pr-12 md:p-16">
        <div className="flex mt-6 flex-row flex-nowrap w-full bg-[#a998ff] h-[30px] md:h-[49px] rounded-tr-full bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
          <div className="flex w-3 md:w-24 items-center icon md:bg-[url('/img/forward.png')] bg-no-repeat bg-center"></div>
          <div className="flex items-center">
            <span>
              <span className="text-1xl md:text-2xl md:font-bold text-white">
                Step 3
              </span>
            </span>
            <span className="ml-5">
              <span className="text-sm md:text-2xl md:font-bold text-gray-200">
                Enter Instagram Account
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap space-y-4 w-full items-center px-3 md:space-x-2 md:space-y-0 md:px-16 md:flex-row md:flex-nowrap">
        <div className="flex flex-row md:h-24 flex-nowrap w-full">
          <div className="flex w-10/12 items-center justify-center">
            <input
              className="w-full h-full rounded-md"
              type="text"
              name="username"
              placeholder="Instagram Username"
            ></input>
          </div>
          <div className="flex w-2/12 h-full items-center justify-center">
            <span className="flex w-full h-full items-center justify-center py-3 px-7 bg-gradient-to-b from-[#5340ff] to-[#1a0afa] md:py-5 md:px-10 md:bg-cyan-700 rounded-md text-white">
              <span className="text-center">Next</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
