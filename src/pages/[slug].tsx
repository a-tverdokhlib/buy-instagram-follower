import { apiHandler, categoryRepo, serviceRepo } from 'helpers/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Blog from '@/components/Blog'
import BuyAutoInstagramFollowers from '@/components/Buy-Auto-Instagram-Followers'
import BuyAutoInstagramLikes from '@/components/Buy-Auto-Instagram-Likes'
import BuyCustomInstagramComments from '@/components/Buy-Custom-Instagram-Comments'
import BuyInstagramComments from '@/components/Buy-Instagram-Comments'
import BuyInstagramFollowers from '@/components/Buy-Instagram-Followers'
import BuyInstagramLikes from '@/components/Buy-Instagram-Likes'
import BuyInstagramViews from '@/components/Buy-Instagram-Views'
import InstagramGrowth from '@/components/Instagram-Growth'
import { categoryService } from '@/services/category'

const Slug = (props) => {
  const router = useRouter()
  const { slug } = router.query
  const [mounted, setMounted] = useState(false)

  const onClickedHighQuality = () => {}
  const onClickedActiveFollowers = () => {}
  const getFollowerType = () => {
    return 'highQuality'
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted === true) {
    if (slug === 'buy-instagram-followers')
      return <BuyInstagramFollowers {...props} />
    else if (slug === 'buy-instagram-likes')
      return <BuyInstagramLikes {...props} />
    else if (slug === 'buy-instagram-views')
      return <BuyInstagramViews {...props} />
    else if (slug === 'buy-instagram-comments')
      return <BuyInstagramComments {...props} />
    else if (slug === 'instagram-growth') return <InstagramGrowth />
    else if (slug === 'buy-auto-instagram-likes')
      return <BuyAutoInstagramLikes />
    else if (slug === 'buy-auto-instagram-followers')
      return <BuyAutoInstagramFollowers />
    else if (slug === 'buy-custom-instagram-comments')
      return <BuyCustomInstagramComments />
    else if (slug === 'blog') return <Blog />
    else return <></>
  } else return <></>
}

export default Slug

Slug.getInitialProps = async (ctx) => {
  console.log('Context =>', ctx)
  const resp = await categoryService.searchByUrlSlug(ctx.query.slug)
  return { category: resp.data, services: resp.services }
  // const resp = await categoryService.search('')
  // const categories = resp.data
  // console.log('Categories =>', categories)
  // return { categories: categories }
}

// export async function getStaticPaths() {
//   // const categories = await categoryRepo.getAll()
//   const resp = await categoryService.search('')
//   const categories = resp.data

//   // Get the paths we want to pre-render based on posts
//   let paths = categories
//     .filter((category) => category.isActive === true)
//     .map((category) => ({
//       params: { slug: category.urlSlug },
//     }))
//   paths = [
//     ...paths,
//     { params: { slug: '/' } },
//     { params: { slug: '/admin' } },
//     { params: { slug: '/admin/panel' } },
//     { params: { slug: '/admin/auth' } },
//   ]
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true }
// }

// export async function getStaticProps({ params }) {
//   if (
//     params.slug === '/' ||
//     params.slug === '/admin' ||
//     params.slug === '/admin/panel' ||
//     params.slug === '/admin/auth'
//   )
//     return { props: {} }
//   else {
//     const resp = await categoryService.searchByUrlSlug(params.slug)
//     return { props: { category: resp.data, services: resp.services } }
//   }
// }
