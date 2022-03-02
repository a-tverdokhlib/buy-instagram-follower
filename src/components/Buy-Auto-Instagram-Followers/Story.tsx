type DescItemProps = {
  readonly title: string
}
import Image from 'next/image'
const DescItem: React.FC<DescItemProps> = ({ children, title }) => {
  return (
    <>
      <div className="text-white text-xl font-bold ">{title}</div>
      <div className="mt-2 md:text-left text-gray-400">{children}</div>
    </>
  )
}
export const Story: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center rounded-b-2xl bg-black bg-opacity-30">
      <div className="flex w-full h-12"></div>
      <div className="flex flex-col flex-wrap w-full items-center">
        <div className="flex flex-col flex-wrap w-full items-center">
          <div className="flex w-full justify-center">
            <span>
              <span className="flex text-white font-bold text-2xl ls:text-4xl text-center px-5">
                Why Should You Buy Instagram Auto Followers?
              </span>
            </span>
          </div>
          <div className="flex flex-col flex-wrap w-full justify-center items-center">
            <div className="mt-8 mb-8 flex w-full justify-center">
              <div className="flex w-32 justify-center bg-white rounded-2xl h-2"></div>
            </div>
          </div>
        </div>
        <div className="content flex flex-col flex-wrap w-full p-3 md:px-28 md:py-5">
          <div className="w-full justify-center">
            <span className="flex">
              <span className="text-gray-400 text-base text-center">
                Instagram changes the world: one in five persons on this planet
                uses Instagram, and 89% of online celebrities indicate that
                Instagram matters most for influence expanding. We change
                Instagram: with the market getting saturated, we now provide the
                best solution to help you win this competition. Buy Instagram
                auto followers at GetInsta. Least cost, most effect.
              </span>
            </span>
          </div>
          <div className="h-10"></div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="inline-block">
              <p className="float-right w-full ss:w-1/2">
                <div className="w-full h-[270px] relative">
                  <Image
                    src="/img/reason-bg.svg"
                    alt="Reason"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </p>
              <div>
                <DescItem title={'Grow Followers Organically'}>
                  <span>
                    <span>
                      Via the unique system designed by our experienced team, we
                      present you with the most organic method to increase auto
                      Instagram followers. Build your solid Instagram followers
                      automatically & continuously. Perfectly favored by
                      Instagram algorithm that provides you more chance to get
                      recommended.
                    </span>
                  </span>
                </DescItem>
                <div className="h-10"></div>
                <DescItem title={'Promote Account and Increase Engagement'}>
                  <span>
                    <span>
                      The most efficient promotion strategy for online business
                      is ahead of you. Get quality Instagram followers to
                      massively boost your social media credibility and more
                      audiences will be attracted. Also, high-quality follower’s
                      gathering leads to expected engaging enthusiasm. Don’t
                      envy other online celebrities cause you are going to be
                      the next.
                    </span>
                  </span>
                </DescItem>
                <div className="h-10"></div>
                <DescItem title={'Get Ahead of the Competition'}>
                  <span>
                    <span>
                      The best opportunity to get you standing out from the red
                      sea. Compared to rivals sticking to old, deficient ways of
                      maturing accounts, the constant stream of Real and Organic
                      followers gradually fosters your prestige and eventually
                      contributes to your brand’s publicity. No waiting, no
                      wasting. Beat them at the starting line.
                    </span>
                  </span>
                </DescItem>
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 md:h-0"></div>
      </div>
    </div>
  )
}
