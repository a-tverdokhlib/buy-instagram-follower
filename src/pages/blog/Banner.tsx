export const Banner: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full bg-[#222232]">
      <div className="flex flex-col flex-wrap px-3 py-16 ls:p-16 space-y-3 justify-center">
        <div className="text-white text-3xl ls:text-5xl text-center">
          <span>
            <span className="">Blog</span>
          </span>
        </div>
        <div className="text-white text-1xl text-center py-10 md:px-24 lg:px-48">
          <span>
            <span>
              We bring you the best stories and articles. You’ll find tips on
              all Social Networks growth and general social media advice as well
              as latest updates related to our services.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
