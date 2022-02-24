type Props = {
  readonly providedFollowers: string
  readonly deliveredLikes: string
  readonly repeatedCustomers: string
}
export const Statics: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center bg-black bg-opacity-30 rounded-t-2xl">
      <div className="flex w-full h-32"></div>
      <div className="flex flex-col flex-wrap w-full items-center h-[90%] md:h-[650px] bg-[url('/img/stat-graph.svg')] bg-no-repeat bg-center">
        <div className="flex w-full justify-center">
          <span>
            <span className="flex text-white font-bold text-2xl ls:text-4xl text-center">
              Until Now, We Have
            </span>
          </span>
        </div>
        <div className="flex flex-col flex-wrap w-full justify-center md:h-[90%] items-center">
          <div className="mt-8 mb-8 flex w-full justify-center">
            <div className="flex w-32 justify-center bg-white rounded-2xl h-2"></div>
          </div>
          <div className="md:-mt-5 flex flex-wrap justify-center md:ml-auto md:mr-[20%] w-40 bg-[#532466] bg-opacity-90 rounded-full py-2 hover:cursor-pointer hover:bg-orange-800 transition-all duration-500 delay-75">
            <span className="w-full flex justify-center">
              <span className="w-full text-white text-lg text-center">
                {props.deliveredLikes}
              </span>
            </span>
            <span className="w-full flex justify-center">
              <span className="w-full text-white text-center">
                Likes Delivered
              </span>
            </span>
          </div>
          <div className="mt-10 md:mt-0 flex flex-wrap justify-center md:mr-auto dm:ml-[5%] ml:ml-[10%] lg:ml-[15%] xl:ml-[20%] w-42 bg-[#532466] bg-opacity-90 rounded-full py-2 hover:cursor-pointer hover:bg-orange-800 transition-all duration-500 delay-75">
            <span className="w-full flex justify-center">
              <span className="w-full text-white text-lg text-center">
                {props.providedFollowers}
              </span>
            </span>
            <span className="w-full flex justify-center">
              <span className="w-full text-white text-center">
                Followers Provided
              </span>
            </span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center md:mb-12 md:mt-auto md:ml-auto md:mr-auto w-44 bg-[#532466] bg-opacity-90 rounded-full py-2 hover:cursor-pointer hover:bg-orange-800 transition-all duration-500 delay-75">
            <span className="w-full flex justify-center">
              <span className="w-full text-white text-lg text-center">
                {props.repeatedCustomers}
              </span>
            </span>
            <span className="w-full flex justify-center">
              <span className="w-full text-white text-center">
                Repeat Customer
              </span>
            </span>
          </div>
          <div className="h-24 md:h-0"></div>
        </div>
      </div>
    </div>
  )
}
