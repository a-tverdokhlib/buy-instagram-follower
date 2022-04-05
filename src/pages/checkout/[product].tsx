import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { categoryService } from '@/services/category'
import { serviceService } from '@/services/service'

const Product = (props) => {
  const router = useRouter()
  const { product, serviceId } = router.query
  const [mounted, setMounted] = useState(false)
  const [selectedServiceItem, setSelectedServiceItem] = useState<any>()

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

  if (mounted === true) {
    return (
      <>
        <Header />
        <main
          id="content"
          className="flex flex-1 flex-col w-full top-0 min-h-screen p-0"
        >
          <div className="flex flex-col flex-wrap w-full items-center justify-center bg-[#222232]">
            <div className="flex flex-col flex-wrap w-full md:w-[850px] p-2 ls:p-10 md:px-24">
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
                  ></input>
                </div>
                <div className="flex w-full">
                  <input
                    className="w-full p-3 rounded-lg"
                    type="text"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div className="flex">
                  <div className="btn-buyit justify-center mt-5">
                    <a className="flex space-x-1 rounded-full py-3 px-7 gradient-btn-3 justify-center hover:cursor-pointer">
                      <span className="text-lg w-48 text-gray-300 text-center">
                        Select Account
                      </span>
                    </a>
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
          </div>
          <div className="h-32 bg-[#222232]"></div>
        </main>
        <Footer />
      </>
    )
  } else return <></>
}

export default Product

Product.getInitialProps = async (ctx) => {
  const resp = await categoryService.searchByUrlSlug(ctx.query.product)
  return { category: resp.data, services: resp.services }
}
