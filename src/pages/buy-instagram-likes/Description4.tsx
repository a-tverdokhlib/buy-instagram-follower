import Link from 'next/link'

import { Video } from '@/components/atoms/Video'

type DescItemProps = {
  readonly title: string
}
const DescItem: React.FC<DescItemProps> = ({ children, title }) => {
  return (
    <>
      <div className="flex w-full justify-center text-white text-xl font-bold text-center">
        {title}
      </div>
      <div className="flex flex-wrap flex-col space-y-4 w-full justify-center text-gray-400 text-center">
        {children}
      </div>
    </>
  )
}
export const Description4: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap space-y-8 p-10 md:px-16 bg-[#222232] rounded-lg">
      <DescItem title="That Wasn’t So Hard, Was It?">
        <span>
          <span>
            Just to make this as easy as possible for everyone, here is a
            summary of this whole article in one sentence; create high quality
            and honest content, and you will get more organic likes. It really
            is as easy as that. Even if you never took the time to study the
            marketing techniques, algorithms, or current trends, you could be
            wildly successful just by giving the users what they actually want.
            That being said, the more you know about how social media marketing
            works, the more successful you will be.
          </span>
        </span>
      </DescItem>
      <Video href="" />
    </div>
  )
}
