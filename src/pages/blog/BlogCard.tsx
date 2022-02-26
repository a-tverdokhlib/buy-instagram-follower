type Props = {
  readonly info: any
}
import { useEffect, useState } from 'react'

import useIsInViewport from '@/redux/store/use-is-in-viewport'

export const BlogCard: React.VFC<Props> = (props) => {
  const { elementRef, isInViewPort } = useIsInViewport()
  const [shouldFade, setShouldFade] = useState(false)

  useEffect(() => {
    if (!isInViewPort) {
      return
    }
    setShouldFade(true)
  }, [isInViewPort])

  return (
    <div
      ref={elementRef}
      className="flex flex-col flex-wrap w-full md:flex-row md:flex-nowrap justify-center md:px-20 py-5"
    >
      <div className="flex w-full md:w-1/2 items-start justify-center">
        <img src={props.info.imgUrl} alt="Blog Image" />
      </div>
      <div
        className={
          !shouldFade
            ? 'md:-ml-[50px]  flex flex-col flex-wrap w-full md:w-1/2 px-4 py-2 bg-[black] bg-opacity-30 -translate-x-full transition ease-in-out delay-1000 opacity-0'
            : 'md:-ml-[50px]  flex flex-col flex-wrap w-full md:w-1/2 px-4 py-2 bg-[black] bg-opacity-30 translate-x-0 transition ease-in-out delay-1000 opacity-100'
        }
      >
        <span>
          <span className="text-white text-xl">{props.info.title}</span>
        </span>
        <div className="flex flex-col flex-wrap w-full">
          {props.info.contents.map((content, id) => {
            return (
              <>
                <div key={id}>
                  <span>
                    <span className="text-gray-300 text-base">
                      {content.subTitle}
                    </span>
                  </span>
                </div>
                <div key={id}>
                  <span>
                    <span className="text-gray-300 text-base">
                      {content.description}
                    </span>
                  </span>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
