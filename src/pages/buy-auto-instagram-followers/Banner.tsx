import { Image } from '@/components/atoms/Image'
export const Banner: React.VFC = () => {
  return (
    <div className="flex flex-wrap flex-col w-full bg-[#222232]">
      <div className="mt-12 flex flex-wrap flex-col md:flex-row md:flex-nowrap w-full p-3">
        <div className="flex w-full md:w-7/12 items-center justify-end px-10">
          <span className="flex">
            <span className="text-white text-2xl md:text-3xl font-bold text-center">
              Buy Auto Instagram Followers
            </span>
          </span>
        </div>
        <div className="flex w-full md:w-5/12 justify-center items-center md:justify-start">
          <img
            src="/img/banner-tag.png"
            alt="Banner Tag"
          ></img>
        </div>
      </div>
    </div>
  )
}
