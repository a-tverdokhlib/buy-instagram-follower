import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Loading } from '@/components/atoms/Loading'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { cardinityService } from '@/services/cardinity'
import { categoryService } from '@/services/category'
import { goreadService } from '@/services/goread'
const Product = (props) => {
  const router = useRouter()
  const { register, handleSubmit, reset, formState } = useForm()
  const { errors } = formState

  const { product, serviceId, email, username } = router.query
  const [mounted, setMounted] = useState(false)
  const [selectedServiceItem, setSelectedServiceItem] = useState<any>()
  const [instaUsername, setInstaUsername] = useState(username)
  const [useremail, setUserEmail] = useState(email)
  const [coupanCode, setCoupanCode] = useState('')
  const [userProfilePictureUrl, setUserProfilePictureUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [showLimitedOffer, setShowLimitedOffer] = useState(true)
  const [cardinityReady, setCardinityReady] = useState(false)
  const [signature, setSignature] = useState('')
  const submitRef = useRef<HTMLButtonElement>(null)
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
      email: useremail,
      username: instaUsername,
      quantity: selectedServiceItem.quantity,
      name: selectedServiceItem.name,
      link: absoluteUrl,
      coupan: selectedServiceItem.coupanCode,
      coupanDiscount: selectedServiceItem.coupanDiscount,
    })
    if (result) {
      setLoading(false)
      if (result.status === 'success') {
        console.log('Go to Next Step')
        router.replace({
          query: {
            ...router.query,
            serviceId: selectedServiceItem._id,
            email: useremail,
            username: instaUsername,
          },
        })
      } else {
        console.log('Something wrong.')
        alert('Failed! Please check if you have inputed valid email.')
      }
    }
  }
  const onChangeAccountClick = () => {
    router.push({
      query: {
        ...router.query,
        email: null,
        username: null,
      },
    })
  }

  const onSubmit = async (data) => {
    // const signature = await cardinityService.sign(data)
    // data['signature'] = signature
    // setSignature(signature)
  }

  const onPayClick = async () => {
    const data = {
      amount: selectedServiceItem.price,
      cancel_url: absoluteUrl,
      country: 'LT',
      language: 'EN',
      currency: 'USD',
      description: selectedServiceItem.name,
      order_id: '123',
      return_url: absoluteUrl,
    }
    const resp = await cardinityService.sign(data)
    console.log('Signature =>', resp.signature)
    setSignature(resp.signature)
    setTimeout(() => {
      submitRef.current!.click()
    }, 1000)
  }

  const onPayWithCryptoClick = () => {}

  const onAddToCartClick = () => {}

  const onApplyClick = () => {}

  const onCloseLimitedOffer = () => {
    setShowLimitedOffer(false)
  }

  if (mounted === true) {
    if (
      email === undefined ||
      email === '' ||
      username === undefined ||
      username === ''
    )
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
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={useremail}
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
                        <div
                          className={'w-20 h-20 rounded-full overflow-hidden'}
                        >
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
                          onChange={(e) => {
                            const selectedItems = props.services.filter(
                              (item) => item._id === e.target.value,
                            )
                            if (selectedItems.length > 0) {
                              setSelectedServiceItem(selectedItems[0])
                            }
                            // router.replace({
                            //   query: {
                            //     ...router.query,
                            //     serviceId: e.target.value,
                            //   },
                            // })
                          }}
                          value={
                            selectedServiceItem
                              ? selectedServiceItem._id
                              : serviceId
                          }
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
                      The best followers service around. I have bought many
                      times and I will continue to do so because of their
                      customers service.
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
    else
      return (
        <>
          <Header />
          <main
            id="content"
            className="flex flex-1 flex-col w-full top-0 min-h-screen p-0"
          >
            <div className="flex flex-col flex-wrap w-full items-center justify-center lg:items-start lg:flex-row lg:flex-nowrap bg-[#222232] ">
              <div className="flex flex-col flex-wrap w-full ml:min-w-[850px] ml:max-w-[850px] p-2 ls:p-10 md:px-24">
                <div className="flex flex-col flex-wrap w-full mt-10 md:mt-0 p-3 md:py-16 md:px-10 space-y-5 rounded-lg border-gray-200 shadow-gray-700 shadow-sm bg-black bg-opacity-50">
                  <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap w-full py-10">
                    <div className="flex w-full items-center justify-center">
                      {userProfilePictureUrl !== '' ? (
                        <div
                          className={'w-20 h-20 rounded-full overflow-hidden'}
                        >
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
                    <div className="flex items-center justify-center">
                      <div className="btn-buyit justify-center">
                        <a
                          onClick={() => onChangeAccountClick()}
                          className="flex space-x-1 rounded-full py-3 px-7 gradient-ani-btn !shadow-none justify-center hover:cursor-pointer"
                        >
                          <span className="text-lg w-48 text-gray-300 text-center">
                            Change Account
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-b-[1px] h-5 border-gray-600"></div>
                  <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap w-full items-center">
                    <div className="flex mt-3 w-full">
                      <div className="w-full justify-center items-center">
                        <select
                          onChange={(e) => {
                            setSelectedServiceItem(e.target.value)
                          }}
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
            </div>
            <div className="flex flex-col flex-wrap w-full items-center justify-center lg:items-start lg:flex-row lg:flex-nowrap bg-[#222232] ">
              <div className="flex flex-col flex-wrap w-full ml:min-w-[850px] ml:max-w-[850px] p-2 ls:p-10 md:px-24">
                <div className="flex flex-col flex-wrap w-full mt-10 md:mt-0 p-3 md:py-10 md:px-10 space-y-5 rounded-lg border-gray-200 shadow-gray-700 shadow-sm bg-black bg-opacity-50">
                  <div className="flex w-full">
                    <span>
                      <span className="text-3xl text-gray-300">Payment</span>
                    </span>
                  </div>
                  {showLimitedOffer === true ? (
                    <div className="flex rounded-lg items-center justify-center p-5 bg-gradient-to-r from-red-900 to-red-900 w-full">
                      <div className="flex flex-col flex-wrap space-y-3 w-full">
                        <div className="flex">
                          <span className="text-2xl text-gray-400 font-semibold">
                            Limited offer:
                          </span>
                          <span
                            onClick={() => onCloseLimitedOffer()}
                            className="text-2xl text-gray-700 font-bold ml-auto hover:cursor-pointer"
                          >
                            <svg
                              className="h-6 w-6 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="w-full">
                          <span>
                            <span className="text-gray-400 text-base">
                              Add 400000 additional Followers to your cart for
                              only $1039.99 extra and save 20.00%!
                            </span>
                          </span>
                        </div>
                        <div className="flex btn-buyit ">
                          <a
                            onClick={() => onAddToCartClick()}
                            className="flex space-x-1 rounded-full py-2 px-10 gradient-btn-3 !shadow-none justify-center hover:cursor-pointer"
                          >
                            <span className="text-lg w-28 text-gray-300 text-center">
                              Add to cart
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="flex items-center justify-center w-full">
                    <span>
                      <span className="text-6xl text-yellow-700">
                        ${selectedServiceItem.price}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-wrap w-full sm:flex-row sm:flex-nowrap">
                    <input
                      className="w-full p-3 border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-gray-900 bg-transparent text-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Apply Coupon Here"
                      onChange={(e) => setCoupanCode(e.target.value)}
                      value={coupanCode}
                    ></input>
                    <div className="btn-buyit justify-center">
                      <a
                        onClick={() => onApplyClick()}
                        className="flex space-x-1 rounded-full py-3 px-7 gradient-btn-3 !shadow-none justify-center hover:cursor-pointer"
                      >
                        <span className="text-lg w-28 text-gray-300 text-center">
                          Apply
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="w-full h-5"></div>
                  <div className="flex items-center justify-center w-full">
                    <ReCAPTCHA
                      size="normal"
                      sitekey="6Lch5RkeAAAAAEkgDosw1pfb_1yNR7Ko4oCUgz_A"
                    />
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <div className="btn-buyit justify-center">
                      <form
                        name="checkout"
                        method="POST"
                        action="https://checkout.cardinity.com"
                      >
                        <input
                          type="hidden"
                          {...register('amount')}
                          value={selectedServiceItem.price}
                        />
                        <input
                          type="hidden"
                          {...register('cancel_url')}
                          value={absoluteUrl}
                        />
                        <input
                          type="hidden"
                          {...register('country')}
                          value="HK"
                        />
                        <input
                          type="hidden"
                          {...register('language')}
                          value="EN"
                        />
                        <input
                          type="hidden"
                          {...register('currency')}
                          value="USD"
                        />
                        <input
                          type="hidden"
                          {...register('description')}
                          value={selectedServiceItem.name}
                        />
                        <input
                          type="hidden"
                          {...register('order_id')}
                          value={'123'}
                        />
                        <input
                          type="hidden"
                          {...register('return_url')}
                          value={absoluteUrl}
                        />
                        <input
                          type="hidden"
                          {...register('signature')}
                          value={signature}
                        />
                        <button ref={submitRef} type="submit" />
                      </form>
                      <button
                        // type="submit"
                        onClick={() => onPayClick()}
                        className="flex space-x-1 rounded-full py-3 px-7 gradient-ani-btn !shadow-none justify-center hover:cursor-pointer"
                      >
                        <span className="flex justify-center items-center text-lg w-48 text-gray-300 text-center">
                          <svg
                            className="h-5 w-5 text-gray-200"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {' '}
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />{' '}
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          <span className="ml-1">Pay</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <span>
                      <span className="text-gray-400">
                        Note: By clicking to Pay button, you are agreeing to our{' '}
                        <a
                          className="text-red-600"
                          href="https://goread.io/terms"
                          target="_blank"
                          rel="noreferrer"
                        >
                          T&C
                        </a>{' '}
                        and{' '}
                        <a
                          className="text-red-600"
                          href="https://goread.io/terms"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Delivery Policy
                        </a>{' '}
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-3"></div>
                  <div className="w-full">
                    <div className="flex letters-line relative items-center justify-center">
                      <span className="z-[2] relative bg-fuchsia-700 w-14 text-gray-300 text-center rounded-full">
                        {' '}
                        NEW!{' '}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2"></div>
                  <div className="flex w-full items-center justify-center">
                    <div className="btn-buyit justify-center">
                      <a
                        onClick={() => onPayWithCryptoClick()}
                        className="flex space-x-1 text-white text-base ls:text-xl md:text-2xl bg-gradient-to-r from-orange-500 to-orange-800 px-2 ls:px-7 py-4 md:px-5 md:py-4 rounded-full hover:cursor-pointer hover:px-5 hover:py-4 ls:hover:px-10 ls:hover:py-4 md:hover:px-16 md:hover:py-4 transition-all duration-100"
                      >
                        <span className="flex justify-center items-center text-lg w-48 ls:w-64 text-gray-300 text-center">
                          <svg
                            className="h-5 w-5 text-gray-200"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {' '}
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />{' '}
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          <span className="ml-1">Pay with Crypto</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <div className="flex">
                      <span className="text-gray-500 whitespace-nowrap">
                        We accept
                      </span>
                    </div>
                    <div className="ml-2 flex space-x-1">
                      <div className="h-6 w-6 rounded-full bg-[url('/img/BNB.png')] bg-cover"></div>
                      <div className="h-6 w-6 rounded-full bg-[url('/img/GB.svg')] bg-cover"></div>
                      <div className="h-6 w-6 rounded-full bg-[url('/img/Eth.png')] bg-cover"></div>
                      <div className="h-6 w-6 rounded-full bg-[url('/img/LB.png')] bg-cover"></div>
                      <div className="h-6 w-6 rounded-full bg-[url('/img/SC.svg')] bg-cover"></div>
                    </div>
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
