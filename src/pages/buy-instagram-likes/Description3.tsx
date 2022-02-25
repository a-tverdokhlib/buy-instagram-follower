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
    <div className="flex flex-col flex-wrap space-y-8 px-5 py-10 ls:p-10 md:px-16 bg-[#222232]">
      <DescItem title="What Are Likes?">
        <span>
          <span>
            If you have used any other major social media platform, you probably
            already understand the concept of “likes”, but for the sake of
            keeping it simple, we are going to pretend for a moment that you
            have never heard of a like before. A like is what the viewer does to
            indicate to you that they have viewed something that you posted, and
            that they enjoyed it or agreed with it. By double-tapping the video
            or picture, the viewer “likes” it, and each like is added to a tally
            that is visible only to the person or organization that posted it.
            Likes are not meant to share the picture or video with other
            viewers, and they do not indicate that the person intends to do any
            business with your company. Likes are nothing more than an
            acknowledgement that your post was viewed and appreciated. That
            being said, likes are vitally important, but not as easy to come by
            as you might think. In this article, we will continue to explore the
            surprisingly complex system of gaining likes on Instagram.
          </span>
        </span>
      </DescItem>
      <DescItem title="How Does Instagram Decide Who Sees What?">
        <span>
          <span>
            In order to ensure that viewers are seeing the most relevant posts
            to them, Instagram introduced an algorithm in 2015 that would change
            the order in which users see pictures and videos. The new algorithm
            was introduced to replace the old chronological order because
            Instagram was becoming so popular, with over 400 million users at
            the time, that showing the posts chronologically was no longer a
            sensible way for the platform to operate. Another reason for the
            change was the introduction of advertisements, which would be fitted
            into the new algorithm.
          </span>
        </span>
        <span>
          <span>
            When the new algorithm was first proposed, it was met with
            controversy and hostility, because marketers were already working
            under the conditions that the timing of each post was pivotal. The
            new algorithm would upend the whole marketing operation on
            Instagram, because now technology would decide who wees what based
            on the users own follows, and who they actually engage with. This
            was great for the individual user, but proved to be a difficult
            change for social media marketers. The marketers adapted to the new
            system, of course, but the algorithm is fairly organic and changes
            regularly, so marketers are forced to stay on their toes and adapt
            to regular changes. Overall the new algorithm seems to have had a
            positive impact on the platform, and the response from users seems
            fairly receptive.
          </span>
        </span>
      </DescItem>
      <DescItem title="Advertising on Instagram">
        <span>
          <span>
            Since advertisements were introduced to Instagram in 2015, there has
            been some controversy about it. Instagram uses Facebook Business to
            operate its advertising, and Facebook has access to more information
            about individuals than perhaps any other platform in the world. This
            means that every advertiser can find out if you are interested in
            sports cars, classical music, weight loss, chocolate, family
            photography, or all of the above. If you have ever expressed an
            interest in anything that can be sold, Facebook Business knows about
            it, and they can use that information to target very specific
            demographics. This caused a great deal of controversy during the
            2016 presidential elections. While the concern about this is quite
            understandable, at the end of the day it hardly matters as far as
            advertising is concerned, because advertising is not just about
            informing one specific base demographic, it is also about expanding
            the base. Advertising will always be focused on converting those
            that were not previously interested, which means the primary goal of
            all advertisement is to reach as many people as possible. Yes, they
            can and do use user’s information to target specific groups, but
            chances are most of those users would see those advertisements
            anyway.
          </span>
        </span>
        <span>
          <span>
            That being said, advertising with Instagram is very effective, and
            not terribly difficult for those that aren’t professional marketers.
            In this part of the article, we will go over a few very simple tips
            and tricks for effective advertising on Instagram. Although this
            guide will help you get off to a strong start, it is important to
            note that the more research you do in advance, the more effective
            your advertising campaign will be. And also you can buy instagram
            views from Goread.io
          </span>
        </span>
        <span>
          <span>
            Set Your Budget: The first step is probably the simplest, but also
            the most limiting, set your budget. Keep in mind that more money
            does not automatically equal a more impactful campaign. If you are
            looking to sell an app that connects members of one specific
            neighborhood in one specific city, you don’t really need a budget
            big enough for a nationwide campaign. In fact, you might even be
            able to get away with something like an influencer putting the word
            out, in which case you may not even need an advertising campaign.
          </span>
        </span>
        <span>
          <span>
            Know Your Audience: This step does seem to contradict with some of
            what we said earlier, since this is all about figuring out what
            specific group you are advertising to. Earlier we said that the main
            goal of advertising is to reach as many people as possible,
            including those that are not already in your base, but that does not
            mean it isn’t essential that you know who your base is. For
            instance, if you were writing a young adult fantasy novel about a
            group of female heroes fighting against a tyrannical male, your
            first instinct might be to think that your core demographic is young
            females between the ages of 14-21. While that is probably true,
            there would also be some room for young males in college, feminist
            activist groups, and just fantasy-genre lovers in general. You can
            test different core groups in order to find the most profitable
            demographic. The key here is for you to focus on your demographic
            when creating and advertising so that you can keep your base, while
            also attempting to expand it.
          </span>
        </span>
        <span>
          <span>
            Learn The Metrics: Understanding the metrics of likes, clicks,
            comments, and conversions is essential to your advertising campaign.
            Not only are these going to be the units by which you measure the
            success of the campaign, but the ratios will be used to adapt your
            campaign to trends and changes in the future. For example, if you
            are receiving five likes for every one conversion (actual sales made
            after likes and clicks), then you are in pretty good shape, but one
            thousand likes for every one conversion means there is probably
            something amiss, and you will need to find a way to close the deal
            on interested users.
          </span>
        </span>
        <span>
          <span>
            Don’t Forget The Long Game: Although you do want to push for high
            numbers in the short term, as these bursts will often help to
            sustain you when business inevitably slows as excitement dies down,
            never forget that advertising has a long game as well. Building a
            recognizable name and brand recognition is what sets apart McDonalds
            from Joe’s Burger Shack.
          </span>
        </span>
      </DescItem>
      <DescItem title="The Magic of The Algorithm">
        <span>
          <span>
            The point of creating and introducing the algorithm in the first
            place was not just to expand Instagram’s base, but to keep users
            engaged longer. Having a lot of regular users is important for a
            social media platform, but after that, the money is in keeping them
            looking at the platform for as long as possible, so that they can
            see as many advertisements as possible. Here is how the algorithm
            makes that happen.
          </span>
        </span>
      </DescItem>
      <DescItem title="A user logs on and looks at pictures and videos.">
        <span>
          <span>
            The algorithm collects relevant data about what the user took an
            interest in, and stores the data for next time.
          </span>
        </span>
        <span>
          <span>
            The user comes back, and finds that the pictures and videos they are
            looking at are now catered to their personal taste, so they spend
            more time on the platform.
          </span>
        </span>
        <span>
          <span>
            The algorithm collects even more specific data, and stores it for
            next time.
          </span>
        </span>
        <span>
          <span>Rinse and repeat.</span>
        </span>
        <span>
          <span>
            As you can see, the system is set up to benefit both the user and
            the advertisers; and benefitting the user and advertisers is good
            for Instagram as a whole.
          </span>
        </span>
      </DescItem>
      <DescItem title="Cheaters Never Prosper">
        <span>
          <span>
            For your own good, do not spend time or resources trying to cheat
            the system. The short term results of using spam bots or other
            unsavory methods are simply not worth what you will invest.
            Instagram is constantly on the lookout for spamming accounts, and
            they get banned regularly. Even if they don’t find you out right
            away, the users will hardly be fooled. If you post an advertisement
            something most people have never heard of, and get 200,000 likes in
            the first hour, most users are savvy enough to see right through
            that. Even using organic marketing services, which offer actual
            people to like and comment on your posts for a price, is simply not
            as effective as working with the system for actual organic likes
            over the long haul.
          </span>
        </span>
      </DescItem>
      <DescItem title="High-Quality Content Draws High-Quality Users">
        <span>
          <span>
            Ask yourself this question: would you rather have 100,000 likes and
            make 25 sales, or would you rather have 100 likes and make 99 sales?
            In this circumstance, obviously making more sales with less likes is
            preferable, but what you really want is both. Gimmicks and tricks
            will get you thousands of likes, and zero real interest. A fantastic
            product will get you a loyal base, and little expansion. However, a
            quality product combined with quality content on Instagram will
            bring in the kind of users that are actually looking to buy, and if
            you impress them, they will help to spread the word for you through
            likes and word-of-mouth.
          </span>
        </span>
        <span>
          <span>
            Look at it this way, you can evoke a legitimate reaction from people
            by asking them if they prefer Chevrolet or Ford. The question is,
            why? It is because Chevy and Ford have both done one thing
            demonstrably right, they made their brands a question of honesty and
            quality, rather than just popularity. People will almost feel a
            moral obligation to commit to certain brands over
          </span>
        </span>
        <span>
          <span>
            others, because those brands have taken the time to create organic
            and authentic interest in their product. However you feel about
            those particular brands, they invested the time and money into
            creating genuine interest, and forsook the easy way. Likes work in a
            very similar fashion. It is not about racking up numbers at any
            cost, it is about generating real enthusiasm about real quality
            content.
          </span>
        </span>
        <span>
          <span>Details, Details…</span>
        </span>
        <span>
          <span>
            There is a quote from Fredrick Bachman, a Swedish writer,
            “Everything is complicated if no one explains it to you”. All of
            this might seem a little difficult to grasp, and you might be
            thinking that there has to be a lot of details that you simply are
            not getting. Well, that is correct. Building an organic following on
            Instagram is not terribly complicated, but it can seem that way if
            you don’t have the right help. Here are the definitions of a few
            words and phrases that you might run into while you’re building your
            campaign.
          </span>
        </span>
        <span>
          <span>
            <span className="text-red-400">
              <Link href="#">
                <a>Influencer</a>
              </Link>
            </span>
            : An influencer is someone with a following so large that they can
            influence trends and sales on Instagram. A plug from an influencer
            is not a guarantee of success, but it can definitely help.
          </span>
        </span>
        <span>
          <span>
            Social Proof: Put simply, this just means that people are more
            likely to do something if they see others doing it first. The term
            was coined by Robert Cialdini, a professor at Arizona State
            University. Social proof is the reason that influencers matter in
            social media marketing.
          </span>
        </span>
        <span>
          <span>
            Organic Likes: This means likes that came from actual people that
            actually have an interest in your content. There is such a thing as
            “organic marketing services”, but these are paid for and not really
            organic at all. Organic likes are not paid for, not bots, and not
            duped into thinking your product is something other than what it
            really is. Without a doubt there is nothing better for your
            marketing campaign than a lot of truly organic likes.
          </span>
        </span>
      </DescItem>
    </div>
  )
}
