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
      <div className="flex flex-wrap space-y-4 w-full justify-center text-gray-400 text-center">
        {children}
      </div>
    </>
  )
}
export const Description2: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap space-y-8 p-10 md:px-16 bg-[#222232]">
      <DescItem title="Engagement vs. Empty Follows">
        <span>
          <span>
            When you get new followers on Instagram, you usually expect them to
            start engaging with your content. Getting new likes, shares,
            comments, and messages from followers is an essential part of your
            relationship with customers. Feedback is especially crucial because
            you need to know what your client base is looking for in your
            content and whether they find what you’re doing credible.
          </span>
        </span>
        <span>
          <span>
            Fake accounts and bots do not interact and engage with your account
            and content: no comments, no shares, no likes — nothing. If you go
            for a long time with nothing but fake followers, you won’t find
            fulfillment or success on Instagram. All your content will go
            unappreciated.
          </span>
        </span>
      </DescItem>
      <DescItem title="Potential Followers Know the Difference">
        <span>
          <span>
            New followers can easily spot profiles that have nothing but phony
            and bot followers. We already know that you want to appeal to your
            target market, and we guarantee that you won’t appeal to anyone if
            your main following is fake accounts and bots. You can also{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>buy instagram views</a>
              </Link>
            </span>{' '}
            from here.
          </span>
        </span>
        <span>
          <span>
            Fake accounts are typically easy to spot. If you visit their
            personal pages, you’ll either see no posts or nothing but simplistic
            posts that are pointless. Fake accounts churn out nothing but emoji
            interactions that are usually senseless in design. All of this makes
            it easy for real users to spot phony accounts and bots in your
            following.
          </span>
        </span>
        <span>
          <span>
            Make sure you’re not scaring off possible new followers with an
            overabundance of fake accounts. Every real user you have following
            you is another potential customer or someone who will share your
            content. If your credibility is in the gutter because of bots, real
            users won’t give you or your product a second glance.
          </span>
        </span>
      </DescItem>
      <DescItem title="It’s All About Value">
        <span>
          <span>
            On Instagram, there’s nothing more valuable than content and
            followers. Excellently crafted content always does better than
            poorly put together posts. You should always{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>bring value to your account</a>
              </Link>
            </span>{' '}
            with quality content that brings value to your followers’ lives and
            speaks to their human nature. The more valuable content you provide,
            the more true users you attract to your profile. If you use a
            legitimate service to buy Instagram followers, bot and fake accounts
            won’t become a problem, and your page will stay credible and
            valuable.
          </span>
        </span>
        <span>
          <span>
            Everything in our world carries some level of inherent value, and
            Instagram followers, likes, and views are no different. Make sure
            you’re not jeopardizing your account or standing by{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>buying Instagram followers</a>
              </Link>
            </span>
            , likes, and views from scammer companies. You only want to buy real
            followers and likes. You can also instantly see a difference between
            real followers and fake accounts.
          </span>
        </span>
      </DescItem>
    </div>
  )
}
