import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/atoms/Loading'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { categoryService } from '@/services/category'
import { goreadService } from '@/services/goread'

const Product = (props) => {
  const router = useRouter()
  const { product, serviceId } = router.query
  const [mounted, setMounted] = useState(false)
  const [selectedServiceItem, setSelectedServiceItem] = useState<any>()
  const [instaUsername, setInstaUsername] = useState('')
  const [email, setEmail] = useState('')
  const [userProfilePictureUrl, setUserProfilePictureUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const absoluteUrl =
    typeof window !== 'undefined' && window.location.href
      ? window.location.href
      : ''

  const stars = [1, 2, 3, 4, 5]
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    const selectedItems = props.services.filter(
      (item) => item._id === serviceId,
    )
    if (selectedItems.length > 0) {
      setSelectedServiceItem(selectedItems[0])
    }
  }, [mounted])

  const onUsernameBlur = async () => {
    const responseData = await goreadService.getUserData(instaUsername)
    console.log('User Data =>', responseData)
    if (responseData.status === 'success') {
      if (responseData.data.user) {
        setUserProfilePictureUrl(responseData.data.user.profile_pic_url)
      }
    }
    //responseData.data.user.profile_pic_url
  }
  const onSelectAccountClick = async () => {
    setLoading(true)
    const result = await goreadService.sendEmail({
      email: email,
      username: instaUsername,
      quantity: selectedServiceItem.quantity,
      name: selectedServiceItem.name,
      link: absoluteUrl,
    })
    if (result) {
      setLoading(false)
      if (result.status === 'success') {
        // setLoading(false)
        console.log('Go to Next Step')
        router.replace({
          pathname: '/...',
          query: {
            ...router.query,
            email: email,
            username: instaUsername,
          },
        })
        //console.log(router.push(''))
      } else {
        console.log('Something wrong.')
        router.replace({
          pathname: '/...',
          query: {
            ...router.query,
            email: email,
            username: instaUsername,
          },
        })
      }
    }
  }
  if (mounted === true) {
    return (
      <>
        <Header />
        <main
          id="content"
          className="flex flex-1 flex-col w-full top-0 min-h-screen p-0"
        >
          <div className="flex flex-col flex-wrap w-full items-center justify-center lg:items-start lg:flex-row lg:flex-nowrap bg-[#222232] ">
            <div className="flex flex-col flex-wrap w-full ml:min-w-[850px] ml:max-w-[850px] p-2 ls:p-10 md:px-24">
              <div className="flex flex-col flex-wrap w-full mt-10 md:mt-0 p-3 md:p-16 space-y-5 rounded-lg border-gray-200 shadow-gray-700 shadow-sm bg-black bg-opacity-50">
                <div className="flex w-full">
                  <span>
                    <span className="text-2xl ls:text-3xl text-gray-300">
                      Instagram account
                    </span>
                  </span>
                </div>
                <div className="flex w-full">
                  <span>
                    <span className="text-xl ls:text-2xl text-gray-300">
                      Select your Instagram account
                    </span>
                  </span>
                </div>
                <div className="flex w-full">
                  <input
                    className="w-full p-3 rounded-lg"
                    type="text"
                    placeholder="Your Instagram username"
                    onChange={(e) => setInstaUsername(e.target.value)}
                    value={instaUsername}
                    onBlur={() => onUsernameBlur()}
                  ></input>
                </div>
                <div className="flex w-full">
                  <input
                    className="w-full p-3 rounded-lg"
                    type="text"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  ></input>
                </div>
                <div className="flex flex-col flex-wrap space-y-5 md:flex-row md:flex-nowrap md:space-y-0 md:space-x-5">
                  <div className="btn-buyit justify-center mt-5">
                    <a
                      onClick={() => onSelectAccountClick()}
                      className="flex space-x-1 rounded-full py-3 px-7 gradient-ani-btn !shadow-none justify-center hover:cursor-pointer"
                    >
                      <span className="text-lg w-48 text-gray-300 text-center">
                        Select Account
                      </span>
                    </a>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    {userProfilePictureUrl !== '' ? (
                      <div className={'w-20 h-20 rounded-full overflow-hidden'}>
                        <Image
                          src={userProfilePictureUrl}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="flex w-full h-5 border-b-[1px] border-b-gray-600"></div>
                <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap w-full items-center">
                  <div className="flex w-full">
                    <div className="w-full justify-center items-center">
                      <select
                        onChange={(e) => setSelectedServiceItem(e.target.value)}
                        value={selectedServiceItem._id}
                        className="flex w-full space-x-1 rounded-full py-4 px-3 justify-center hover:cursor-pointer border-[2px] border-[#ccc] bg-transparent text-white text-lg hover:border-purple-900"
                      >
                        {props.services.map((item, id) => {
                          return (
                            <option
                              key={id}
                              className="text-gray-700 text-lg"
                              value={item._id}
                            >
                              {item.name} | ${item.price} - One time
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full p-2 ls:p-10 lg:p-0 lg:mr-10">
              <div className="flex flex-col flex-wrap w-full lg:pt-24 items-center justify-center">
                <div className="flex overflow-hidden rounded-full bg-gray-500 h-20 w-20 p-1">
                  <div className="w-full h-full rounded-full bg-[url('/img/avt-template.jpg')] bg-center" />
                </div>
                <div className="flex mt-10">
                  <span className="text-gray-300 text-lg text-center">
                    The best followers service around. I have bought many times
                    and I will continue to do so because of their customers
                    service.
                  </span>
                </div>
                <div className="flex mt-10 w-full justify-center">
                  {stars.map((item, id) => {
                    return (
                      <svg
                        key={id}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400 hover:scale-125"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {' '}
                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                      </svg>
                    )
                  })}
                </div>
                <div className="flex mt-10 items-center justify-center">
                  <span>
                    <span className="text-white text-lg font-bold">Dino</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-opacity-0 bg-black">
              <Loading />
            </div>
          ) : (
            <></>
          )}
          <div className="h-32 bg-[#222232]"></div>
        </main>
        <Footer />
      </>
    )
  } else return <></>
}

export default Product

Product.getInitialProps = async (ctx) => {
  console.log('Context Query =>', ctx.query)
  const resp = await categoryService.searchByUrlSlug(ctx.query.product)
  return { category: resp.data, services: resp.services }
}
