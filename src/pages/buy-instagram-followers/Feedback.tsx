export const Feedback: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full p-10 md:p-12 bg-[#222232]">
      <div className="mt-10 flex w-full items-center justify-center">
        <span className="text-white text-center text-3xl">
          <span>Customer Feedback & Reviews</span>
        </span>
      </div>
      <div className="flex w-full items-center justify-center p-3 md:p-10">
        <span className="text-gray-500 text-2xl text-center">
          <span>
            Here at Goread we pride ourselves in exceptional service and
            affordable prices. Don’t just take our word for it – check out our
            customer reviews below
          </span>
        </span>
      </div>
      <div className="flex flex-col flex-wrap space-y-3 md:flex-row md:flex-nowrap md:space-x-3 md:space-y-0">
        <div className="flex w-full text-white">Submit Your Review</div>
        <div className="flex w-full text-white">Read customers review</div>
      </div>
    </div>
  )
}
