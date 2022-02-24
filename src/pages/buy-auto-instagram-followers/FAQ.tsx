type DescItemProps = {
  readonly title: string
}
const DescItem: React.FC<DescItemProps> = ({ children, title }) => {
  return (
    <>
      <div className="text-white text-xl font-bold">{title}</div>
      <div className="mt-2 md:text-left text-gray-300">{children}</div>
    </>
  )
}
export const FAQ: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center rounded-2xl bg-black bg-opacity-30">
      <div className="flex w-full h-12"></div>
      <div className="flex flex-col flex-wrap w-full items-center">
        <div className="mt-10 flex flex-col flex-wrap w-full items-center">
          <div className="flex w-full justify-center">
            <span>
              <span className="flex text-white font-bold text-2xl ls:text-2xl md:text-4xl text-center ls:px-16">
                FAQs about Buying Instagram Auto Followers
              </span>
            </span>
          </div>
          <div className="flex flex-col flex-wrap w-full justify-center items-center">
            <div className="mt-8 mb-8 flex w-full justify-center">
              <div className="flex w-32 justify-center bg-white rounded-2xl h-2"></div>
            </div>
          </div>
        </div>
        <div className="content grid grid-cols-1 w-full p-3 gap-5 md:px-28 md:grid-cols-2">
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="When will I get my automatic Instagram followers?">
              <span>
                <span>
                  Your order will be processed immediately by GetInsta once it
                  is placed. You will get the subscribed number of followers
                  automatically every 24 hours.
                </span>
              </span>
            </DescItem>
            <div className="h-10"></div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="Is it safe to buy Instagram auto followers?">
              <span>
                <span>
                  Of course, buying Instagram auto followers is completely a
                  safe and common behavior, just like the process of growing
                  followers on Instagram. With GetInsta, the subscribed number
                  of followers can be delivered to your account every day
                  organically & securely. No password, no verification needed.
                </span>
              </span>
              <div className="h-10"></div>
            </DescItem>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="Will I lose some Instagram auto followers?">
              <span>
                <span>
                  GetInsta’s drop-protection system can fill active Instagram
                  followers automatically to maintain your followers’ count.
                  Because all the followers are real and active, just try your
                  best to make them loyal. After having a sturdy follower base,
                  you will get more and more Instagram followers definitely.
                </span>
              </span>
              <div className="h-10"></div>
            </DescItem>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="We Offer More Instagram Auto Followers">
              <span>
                <span>
                  Except for buying Instagram auto followers to get Instagram
                  followers grow organically, you can also choose one-time
                  purchase for instant Instagram followers, no subscription,
                  fast delivery.
                </span>
              </span>
              <div className="h-10"></div>
            </DescItem>
          </div>
        </div>
        <div className="h-24 md:h-0"></div>
      </div>
    </div>
  )
}
