import Link from 'next/link'

type DescItemProps = {
  readonly title: string
}
const DescItem: React.FC<DescItemProps> = ({ children, title }) => {
  return (
    <>
      <div className="flex w-full justify-center text-white text-xl font-bold text-center">
        {title}
      </div>
      <div className="flex flex-wrap space-y-6 w-full justify-center text-gray-400 text-center">
        {children}
      </div>
    </>
  )
}
export const Description2: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap space-y-8 p-10 md:px-16 bg-[#222232]">
      <DescItem title="The Ultimate Guide To Instagram Likes">
        <span>
          <span>
            Instagram is one of the most used social media networks in the
            world. With over a billion regular users, and over four billion
            likes shared every single day, Instagram is a vitally important part
            of any{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>social media promotion</a>
              </Link>
            </span>{' '}
            or networking plan. In these modern times, social media networking
            and promotion is far and away the most important aspect of any
            advertising campaign. If social media promotion is so vitally
            important, and Instagram is the holy grail of social media networks,
            it only stands to reason that you should know how to get the most
            possible attention to your company or organization. Goread.io is a
            Verified Listing on{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>Better Business Bureau®</a>
              </Link>
            </span>
          </span>
        </span>
        <span>
          <span>
            Attention on Instagram comes in the form of “likes”, which are
            basically just an indication that someone has seen your picture or
            video, and appreciates the content for whatever reason. Gaining a
            great deal of likes on Instagram is an essential part of any
            promotional campaign, because the like is the unit by which you can
            measure your exposure to Instagram users.
          </span>
        </span>
      </DescItem>
      <DescItem title="The History of Instagram">
        <span>
          <span>
            <span className="text-red-400">
              <Link href="#">
                <a>Instagram</a>
              </Link>
            </span>{' '}
            was founded in 2010, and the first post was made by one of the two
            founders, Mike Krieger, and a few hours later the second post was by
            the co-founder{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>Kevin Systrom</a>
              </Link>
            </span>
            . Steve Anderson, who was the founder of Baseline Ventures, invested
            $250,000 in Systrom’s idea for an app called Burbn that allowed
            users to share their location with friends, but he requested that
            Systrom find a partner to work with in developing the app. Systrom
            found Krieger, and between the two of them they simplified the
            original idea, making it a simple photo-sharing app. Unlike most
            apps and businesses which are built from the ground up, Instagram is
            unique in that it was actually built from a pre-existing app taken
            down to its most basic components.It was introduced to Apple in
            2010, and before the app would even be introduced to Android in
            2012, it already had more than thirty million users. Read more @
            <span className="text-red-400">
              <Link href="#">
                <a>https://blog.hubspot.com/marketing/buy-instagram-likes</a>
              </Link>
            </span>
          </span>
        </span>
        <span>
          <span>
            On the first day that it was introduced to Android, Instagram was
            downloaded a whopping one million times! This was just an indicator
            of the enormous success that Instagram would see throughout the next
            few years. This is probably why Facebook made the wise decision to
            purchase Facebook for $1 billion in cash and stocks. The purchase of
            Instagram by Facebook was actually quite astonishing, considering
            the fact that Instagram was not generating any revenue at all at the
            time.
          </span>
        </span>
        <span>
          <span>
            Instagram has been around for about ten years now, and they have
            continued to update the platform on a regular basis. In 2013,
            Instagram introduced direct messaging to the platform, which gave
            users more direct contact with one another. In 2015, advertising was
            added to the platform, which is how they began to generate some
            serious revenue. They also introduced live streaming, which again
            increased the direct contact between users. One of the most recent
            updates to the platform was the change that made likes hidden from
            users. The idea behind this was to place less focus on the likes,
            and more on engagement between users. This change has not been
            around long enough to really know the impact yet, but the response
            seems to be fairly positive for the time being. Even though likes
            are now hidden from other users, they are still just as valuable to
            anyone attempting a promotional campaign for a business or
            organization, because likes are still the best way to measure your
            reach on Instagram.
          </span>
        </span>
      </DescItem>
    </div>
  )
}
