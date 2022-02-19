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
      <DescItem title="High-Quality Photos">
        <span>
          <span>
            You can generate your best possible content and expect it to do
            well, but if your photos are fuzzy, grainy, blurred, or otherwise
            hard to make out, your followers won’t appreciate it. If you want to
            become a professional influencer or you want to build a successful
            social media presence for your brand, you need to include
            high-quality photos on your posts. If you need to buy a better
            camera, so be it. It’s the best investment you can make in your
            business.
          </span>
        </span>
        <span>
          <span>
            A quality camera can show off your products better, and more small
            details will show up. Your audience will appreciate the chance to
            see your product more up close. Avoid hard to view photos,
            newspaper-like photos, or anything else that is frustrating or
            boring to see. Use high-definition images only.
          </span>
        </span>
        <span>
          <span>
            Instagram also offers in-app photo editing tools. Take advantage of
            these tools and use the filters when you can. You don’t always need
            to invest in expensive photo editing software. There are plenty of
            free tools built into Instagram, and there are other free photo
            editing apps in the App Store and Google Play Store.
          </span>
        </span>
      </DescItem>
      <DescItem title="? Your Account Will Not Get Banned">
        <span>
          <span>
            When you buy Instagram followers, likes, and views from legitimate
            companies, your account will not get banned. There are
            Instagram-compliant growth services that don’t use bots or fake
            accounts to boost your followers or likes. These companies only use
            real accounts to give you new followers. Instagram has been working
            diligently for some time to purge bot and fake accounts from the
            platform, making it more user and business friendly.
          </span>
        </span>
        <span>
          <span>Here is an excerpt from Instagram’s blog page:</span>
        </span>
        <span>
          <span>
            {'"'}Recently, we’ve seen accounts use third-party apps to
            artificially grow their audience. Every day people come to Instagram
            to have real experiences, including genuine interactions. It is our
            responsibility to ensure these experiences aren’t disrupted by
            inauthentic activity. Starting today, we will begin removing
            inauthentic likes, follows and comments from accounts that use
            third-party apps to boost their popularity. We’ve built machine
            learning tools to help identify accounts that use these services and
            remove the inauthentic activity. This type of behavior is bad for
            the community, and third-party apps that generate inauthentic likes,
            follows and comments violate our Community Guidelines and Terms of
            Use.
          </span>
        </span>
        <span>
          <span>
            We’re taking a number of steps to limit this kind of unwelcome
            behavior. Accounts we identify using these services will receive an
            in-app message alerting them that we have removed the inauthentic
            likes, follows and comments given by their account to others. We
            will also ask them to secure their account by changing their
            password. People who use these types of apps share their username
            and password, and their accounts are sometimes used by third-party
            apps for inauthentic likes, follows and comments. Not only does this
            introduce bad behavior into the Instagram community, it also makes
            these accounts less secure.{'"'}
          </span>
        </span>
        <span>
          <span>
            (https://instagram-press.com/blog/2018/11/19/reducing-inauthentic-activity-on-instagram/)
          </span>
        </span>
        <span>
          <span>
            You should also view Instagram’s Terms of Service and Community
            Guidelines for updates on what content you can include on your
            account and what can get you banned. Instagram’s development team is
            trying to make the platform a better experience for every community
            member.
          </span>
        </span>
        <span>
          <span>
            If you only buy Instagram followers, likes, and views form
            legitimate services, your account will never get flagged or banned.
            Human users make all the difference between quality engagement and
            no engagement. Human users also do not put your account at risk the
            way that bot accounts do.
          </span>
        </span>
      </DescItem>
      <DescItem title="? What Does it Cost?">
        <span>
          <span>
            The first question most people ask, is how much does this service
            cost? The prices vary depending on the company you choose, the
            service you request, and how many followers, likes, or views you
            want. That said, buying growth tools is affordable, even for the
            influencer on a budget. Some services also provide free demos and
            trial periods so that you get a better idea of how the service
            works. Conveniently, most growth providers offer packages to meet
            anyone’s needs.
          </span>
        </span>
        <span>
          <span>
            A lot of these companies take payment via PayPal, but some others
            require a credit card. Whichever way you are asked to pay, use
            caution, and make sure the company is not a scam that will run off
            with your money. Never give your Instagram, PayPal, or bank password
            to a growth service. Stay away from any website that asks you for
            that information.
          </span>
        </span>
        <span>
          <span>
            Instagram growth services cost what you want to get out of it. If
            you need fast growth quickly, you’ll pay more. Less growth at a slow
            pace costs less. Some growth services advertise packages for 50,000
            likes and tens of thousands of followers, which can quickly cost you
            hundreds of dollars. You should only purchase one of these packages
            if you can truly afford them. Large packages are a great avenue for
            fast growth.
          </span>
        </span>
        <span>
          <span>
            Once you reach a high number of followers and interactions, your
            investment will stay paying off. You can start bringing in
            endorsements and sponsorships, which will increase your revenue. If
            you can afford it, the initial investment of a couple of hundred
            dollars for thousands of followers is usually worth it.
          </span>
        </span>
        <span>
          <span>
            Remember that your Instagram account is a business, and you should
            always treat it that way.
          </span>
        </span>
      </DescItem>
      <DescItem title="? How to Spot a Scam Service">
        <span>
          <span>
            Now that you understand how dangerous bots and fake accounts are,
            you need to know how to spot scam Instagram growth services.
          </span>
        </span>
        <span>
          <span>
            Scam services usually exchange your money for bots and fake account
            followers. They might also take your money and run, never giving you
            anything. There are plenty of companies that do both, so pay
            attention.
          </span>
        </span>
      </DescItem>
      <DescItem title="Check the Service’s History">
        <span>
          <span>
            First, you need to make sure you choose to hire a company with a
            proven history of providing only top-quality Instagram services.
            With Instagram growth tools, it’s always a better idea to go with a
            company that has established services with a proven track history of
            success. Look at their credentials, social proof, and verifiable
            reviews.
          </span>
        </span>
        <span>
          <span>
            When you buy Instagram followers, your content reaches people who
            are most interested in what you have to say. Marketing that content
            organically is challenging but buying Instagram followers helps you
            skip past the arduous task of finding followers on your own. When
            you buy Instagram followers, your content gets in front of the right
            audience right away. These are the people who are most likely to
            interact with your company and buy your products or services.
          </span>
        </span>
        <span>
          <span>
            This is the same level of caution you should use with any company
            and online business. Don’t give out your personal information to a
            business you’re not familiar with; legitimate Instagram growth
            companies will not ask for your passwords, which is always a red
            flag.
          </span>
        </span>
      </DescItem>
      <DescItem title="Look at Reviews from Past Customers">
        <span>
          <span>
            Reviews are valuable for every business, and they are always worth
            checking. Take the time to read through the reviews to validate the
            legitimacy of the company before you move forward. Pay attention to
            whether the brand only has 5-star positive reviews that sound
            stilted or fake.
          </span>
        </span>
        <span>
          <span>
            Reviews can tell you a lot about a brand, like how well their
            service performs and how excellent their customer service is. If
            they don’t have any reviews, or very few, you usually want to stay
            away. Also, pay attention to repetition. Reviews that mention the
            same problem over and over point to a serious issue with the product
            or service. Finally, just because a company has more positive
            reviews than negative doesn’t mean you should discount the negative.
            Read through all levels of reviews carefully.
          </span>
        </span>
      </DescItem>
      <DescItem title="Check with the Better Business Bureau or Other Service">
        <span>
          <span>
            Check in with the Better Business Bureau (BBB) to see whether the
            company is legitimate and credible. Poor reviews and a low rating on
            the BBB website point to a company with which you don’t want to do
            business. The BBB is designed to provide a consumer resource to
            verify companies before you do business with them. There are similar
            services in other countries.
          </span>
        </span>
      </DescItem>
      <DescItem title="Utilize the Press for Information">
        <span>
          <span>
            News sites like Forbes, Entrepreneur, and Vanity Fair are valuable
            resources for more information on Instagram services. Many service
            providers are featured on these new sites in some way. You can read
            through the comments sections of these stories for user experiences
            and reviews. New sites help you verify the credibility of a site
            without having to work off a company’s website solely.
          </span>
        </span>
      </DescItem>
      <DescItem title="Pay Attention to the Business Website">
        <span>
          <span>
            Now that you have gone through the reviews, the press releases, and
            the BBB, you can analyze the company’s website. The site is your
            last quality check before you jump into bed with a business — pay
            attention to all the small details.
          </span>
        </span>
        <span>
          <span>
            The written copy on the website can tell you a lot about the quality
            of the company. The overall design of the site can similarly speak
            about the brand. However, some scammers pay others to build quality
            websites for their business, so quality or lack thereof is not
            always a dead giveaway. It can get challenging to sift through a
            site to find the small details and determine whether they’re
            legitimate.
          </span>
        </span>
      </DescItem>
      <DescItem title="? The Goread.io Difference">
        <span>
          <span>
            At this point, you understand why buying Instagram followers, or buy
            instagram likes is a crucial part of any brand’s or influencer’s
            social media presence. When you buy Instagram followers, you can
            instantly boost your stats, gain new followers, likes, and views,
            and increase your brand awareness.
          </span>
        </span>
        <span>
          <span>
            What makes Goread.io a better service to choose? Goread.io only
            provides entirely real users for your account. We are a legitimate
            Instagram growth service provider with a proven track history of
            success, countless positive reviews, and stellar customer service.
            We also offer the options of instant or gradual delivery, giving you
            full control.
          </span>
        </span>
      </DescItem>
      <DescItem title="High Quality">
        <span>
          <span>
            We accurately provide what you need — high-quality followers, likes,
            and views. Real user followers are the difference between
            credibility and having your account suspended. At Goread.io, we only
            provide authentic, active Instagram users for all our services.
            Regardless of whether you buy followers, likes, or views for your
            account, everything you receive is 100 percent real.
          </span>
        </span>
        <span>
          <span>
            Real followers mean that your account is never at risk of getting
            flagged or banned. You also never have to provide us with your
            password, unlike some of our competitors. You can easily choose the
            packages and services that best meet your needs and then relax and
            watch your account start growing.
          </span>
        </span>
        <span>
          <span>
            We never sacrifice quality for quantity. Your business is never at
            risk from subpar services. Remember, one human follower is better
            than 10,000 fake followers, which is why we only offer the highest
            quality services for our clients. Your brand’s credibility depends
            on your social proof!
          </span>
        </span>
      </DescItem>
      <DescItem title="Stellar Customer Service">
        <span>
          <span>
            The level of customer service that we offer sets us apart from our
            competition. Goread.io provides 24/7 support for all our packages.
            We have courteous, friendly, and knowledgeable customer service
            agents. Most of the industry’s scam artists don’t provide any type
            of customer service, which is an easy way to differentiate between
            quality and a scam.
          </span>
        </span>
        <span>
          <span>
            Customer service is one of our top priorities, and we resolve every
            issue quickly and efficiently. When you purchase one of our
            Instagram growth tools, you gain access to the best support staff in
            the industry. You might be nervous about buying Instagram growth
            services at first, but you can trust in us. You’ll be astounded by
            our level of commitment to your goals.
          </span>
        </span>
      </DescItem>
      <DescItem title="Instagram Compliant">
        <span>
          <span>
            Because Goread.io only provides real users, your account is always
            compliant with Instagram’s Terms of Service and Community
            Guidelines. You will never be flagged for having bot followers, and
            you can rest assured that your account will continue to grow
            unfettered.
          </span>
        </span>
        <span>
          <span>
            Banishment is a severe punishment and frustrating experience for any
            brand. Never take a risk with your Instagram growth service
            provider. Use Goread.io to grow your business with
            Instagram-compliant services.
          </span>
        </span>
        <span>
          <span>
            As Instagram continues to update its Terms of Service and Community
            Guidelines, Goread.io reads through every new iteration and ensures
            that everything we do complies. Our clients can reap of the benefits
            of our diligence. However, we do recommend that all our clients read
            through the guidelines themselves.
          </span>
        </span>
      </DescItem>
      <DescItem title="Reviews for Verification">
        <span>
          <span>
            We’ve already explained how vital customer reviews are to any brand,
            which is why we’re happy to say that we have a plethora of positive
            reviews for our clients to read through. Various brands have used
            our services and attested to our credibility, too. People everywhere
            agree that Goread.io is one of the best Instagram growth services in
            the industry.
          </span>
        </span>
      </DescItem>
      <DescItem title="Demo Available">
        <span>
          <span>
            As the best companies do, Goread.io offers a demo of our services.
            You can try out our services before you buy them to see whether we
            are a good fit — and we know we will be! The demo gives you a better
            look at how our services work and what you get for what you pay.
          </span>
        </span>
      </DescItem>
      <DescItem title="? Should You Buy Instagram Followers?">
        <span>
          <span>
            Buying Instagram followers comes down to whether you want to boost
            your account organically or with a little help. Overall, buying
            Instagram followers is a valid investment in your Instagram account
            and business. You increase your credibility, social proof, brand
            awareness, and revenue quickly and efficiently. With Goread.io you
            are always in compliance, and you grow your Instagram account in
            ways that take years organically.
          </span>
        </span>
        <span>
          <span>
            Deciding whether to buy Instagram followers, likes, and views
            depends on what your goals are for your Instagram account. Are you
            looking to become the next, hottest influencer? Do you want to earn
            thousands of dollars in sponsorships? Are you trying to make your
            product a best seller? Buying Instagram followers is the best way to
            achieve your goals and more.
          </span>
        </span>
      </DescItem>
      <DescItem title="Why Real Followers Make a Difference">
        <span>
          <span>
            When you want to buy Instagram followers, you should consider
            several different factors. First, you should only buy real users,
            never bots or fake accounts. Scam Instagram growth companies will
            try to give you bots instead of real users as an easy, quick way to
            provide you with results. So why do you need real users? A bot
            account can’t interact with your posts, and you put your account at
            risk if most of your followers are fake.
          </span>
        </span>
      </DescItem>
      <DescItem title="Bots vs. Humans">
        <span>
          <span>
            A human user can connect with your content, build a real
            relationship with your brand, share your posts with friends and
            family, and leave messages and comments. A bot cannot do any of
            those things. Bots cannot share content, and they obviously cannot
            write comments on your posts except for the occasional
            unintelligible emoji. Bots are placeholders that do boost your
            followers count but don’t promote your engagement and credibility.
          </span>
        </span>
        <span>
          <span>
            Scammers have been circulating bot services ever since Instagram
            entered the social media scene in 2010. Even with advancements in
            technology, bot accounts can’t and may never be able to provide
            high-quality engagement with other users’ accounts. Until AI bots
            can feel emotion, they cannot serve as valuable followers.
          </span>
        </span>
      </DescItem>
      <Video href="" />
      <DescItem title="? The Bottom Line">
        <span className="text-center">
          <span>Focus on the following takeaways:</span>
        </span>

        <ul className="list-disc">
          <li>
            <span>
              <span>
                The benefits of buying Instagram followers are clear, but you
                need to use caution when choosing a service.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Social proof goes hand-in-hand with credibility and visibility.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Quality content is king and beats quantity every time.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Buying real users is always better than buying bots and phony
                accounts.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Potential followers can spot bots a mile away and avoid accounts
                that use them.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Thoroughly check all reviews, press releases, and BBB accounts
                before you purchase an Instagram growth provider.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Buying followers, likes, and views won’t get you banned when you
                use a credible service like Goread.io.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Goread.io never puts your account at risk of getting flagged or
                deleted.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Don’t use too many sales-pitch posts because your audience won’t
                engage with them as much.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Unify all your social media accounts and what you’re posting on
                them.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Leverage your large Instagram following to gain more followers
                on Facebook, Twitter, and other platforms.
              </span>
            </span>
          </li>
        </ul>

        <span>
          <span>
            Keep all these things in mind and buy Instagram followers, likes,
            and views to grow your profile today safely. Goread.io is a
            legitimate service that provides only the best growth tools for our
            clients Trust in us, trust in your new users, and trust in your
            growth.
          </span>
        </span>
      </DescItem>
    </div>
  )
}
