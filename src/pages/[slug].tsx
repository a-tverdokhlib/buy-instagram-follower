import { fetchWrapper } from 'helpers'
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
import BuyInstagramStoryViews from '@/components/Buy-Instagram-Story-Views'
import BuyInstagramViews from '@/components/Buy-Instagram-Views'
import InstagramGrowth from '@/components/Instagram-Growth'
import ProductItem from '@/components/ProductItem'
import { behindService } from '@/services/behindService'
import { categoryService } from '@/services/category'
const Slug = (props) => {
  const router = useRouter()
  const { slug } = router.query
  const [mounted, setMounted] = useState(false)

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
    else if (slug === 'instagram-growth') return <InstagramGrowth {...props} />
    else if (slug === 'buy-auto-instagram-likes')
      return <BuyAutoInstagramLikes {...props} />
    else if (slug === 'buy-auto-instagram-followers')
      return <BuyAutoInstagramFollowers {...props} />
    else if (slug === 'buy-custom-instagram-comments')
      return <BuyCustomInstagramComments {...props} />
    else if (slug === 'buy-instagram-story-views')
      return <BuyInstagramStoryViews {...props} />
    else if (slug === 'blog') return <Blog />
    else return <ProductItem {...props} />
  } else return <></>
}

export default Slug

// Slug.getInitialProps = async (ctx) => {
//   console.log('Context =>', ctx)
//   const resp = await categoryService.searchByUrlSlug(ctx.query.slug)
//   return { category: resp.data, services: resp.services }
// }

export async function getStaticPaths() {
  // const resp = await categoryRepo.getAll()

  const slugItems = await behindService.getUrlSlugs()

  const paths = slugItems
    .filter((item) => item.urlSlug !== '')
    .map((item) => ({
      params: { slug: item.urlSlug },
    }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  if (
    slug === '/' ||
    slug === '/admin' ||
    slug === '/admin/panel' ||
    slug === '/admin/auth' ||
    slug === '/blog' ||
    slug === '/contact' ||
    slug === '/faq'
  )
    return { props: {} }
  else if (
    slug === 'buy-instagram-followers' ||
    slug === 'buy-instagram-likes' ||
    slug === 'buy-instagram-views' ||
    slug === 'buy-instagram-comments' ||
    slug === 'instagram-growth' ||
    slug === 'buy-auto-instagram-likes' ||
    slug === 'buy-auto-instagram-followers' ||
    slug === 'buy-custom-instagram-comments' ||
    slug === 'buy-instagram-story-views'
  ) {
    const categoryData = await behindService.getCategoryDataBySlug(slug)
    const productData = await behindService.getProductDataById(categoryData._id)
    return { props: { category: categoryData, services: productData } }
  } else {
    const productData = await behindService.getProductDataBySlug(slug)
    const categoryData = await behindService.getCategoryDataById(
      productData.categoryId,
    )
    return { props: { category: categoryData, service: productData } }
  }

  return { props: {} }
}
