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
export const Description3: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap space-y-8 p-10 md:px-16 bg-[#222232]">
      <DescItem title="Consistency is Key">
        <span>
          <span>
            One key element of any successful Instagram account is consistency
            and staying true to your image and message. Consistency means
            uploading new, fresh content regularly and optimizing your content
            to work with Instagram’s specifications and high traffic times. You
            want enough activity on your account that you are consistently in
            front of your audience getting viewed, liked, and followed. Post
            content frequently, but don’t overdo it. Posting several times a
            week is typically enough for people to take notice, and you won’t
            bog down you’re followers’ feeds with your posts.
          </span>
        </span>
        <span>
          <span>
            Consistency doesn’t only apply to how often you post; it also
            applies to what you’re posting. You don’t want high-quality posts
            for one month and then subpar posts the next. Your followers will
            see the difference and won’t appreciate it. They may even
            unsubscribe from your account if you repeat this process too often.
            Keep churning out quality content and remember that your brand has a
            reputation to uphold. Consistently upload excellent content!
          </span>
        </span>
      </DescItem>
      <DescItem title="Hard Selling Isn’t Helpful">
        <span>
          <span>
            Sales pitches get old quickly and can push your followers to the
            unsubscribe limit. Everyone wants relatable content over sales
            pitches. Your customers expect quality content from your account
            that they can connect with, find humor in, and to which they can
            relate. How often do you relate to a blatant sales pitch?
          </span>
        </span>
        <span>
          <span>
            Tone down the{' '}
            <span className="text-red-400">
              <Link href="#">
                <a>hard selling</a>
              </Link>
            </span>
            . Don’t go through periods where you do nothing but try to sell your
            product. Posts with a human element, like a touching story, are more
            likely to sell your product than posts that strictly advertise and
            ask people to buy the product.
          </span>
        </span>
        <span>
          <span>
            To be an authority in your industry, people need to believe in your
            company. For many consumers, your social media content is their
            first interaction with your brand. They don’t know about your
            products or company values, and they might not want to take the risk
            of purchasing products from you without doing more research on your
            brand. If you have a flourishing Instagram account with thousands of
            followers, likes, and video views, coupled with a stellar website,
            you’ll offer a quality experience for new customers. Your full
            package will speak for itself and prominently display your company’s
            credibility.
          </span>
        </span>
      </DescItem>
    </div>
  )
}
