import { useState } from 'react'

type PackageProps = {
  readonly providerId: number
  readonly title: string
  readonly description: string
}
const Provider: React.VFC<PackageProps> = (props) => {
  const [collapse, setCollapse] = useState(true)
  const collapseItem = () => {
    setCollapse(!collapse)
  }
  return (
    <div className="accordion">
      <div className="accordion-item flex flex-wrap px-3 text-gray-500">
        <div
          className={
            collapse === true
              ? 'accordion-header flex flex-nowrap text-sm space-x-2 hover:scale-105 hover:cursor-pointer transition-all duration-300'
              : 'accordion-header-active flex flex-nowrap text-sm space-x-2 text-[#f15d23] hover:cursor-pointer'
          }
          onClick={collapseItem}
        >
          <div className="flex w-8 h-8 rounded-full hover:cursor-pointer transition">
            <div
              className={
                collapse === true ? 'accordion-btn' : 'accordion-btn-active'
              }
            >
              <svg
                className="svg-icon h-8 w-8 text-gray-500"
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
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <circle cx="12" cy="12" r="3" />{' '}
                <line x1="12" y1="5" x2="12" y2="5.01" />{' '}
                <line x1="17" y1="7" x2="17" y2="7.01" />{' '}
                <line x1="19" y1="12" x2="19" y2="12.01" />{' '}
                <line x1="17" y1="17" x2="17" y2="17.01" />{' '}
                <line x1="12" y1="19" x2="12" y2="19.01" />{' '}
                <line x1="7" y1="17" x2="7" y2="17.01" />{' '}
                <line x1="5" y1="12" x2="5" y2="12.01" />{' '}
                <line x1="7" y1="7" x2="7" y2="7.01" />
              </svg>
            </div>
          </div>
          <span className="my-auto">
            <span>{props.title}</span>
          </span>
        </div>
        <div className={collapse === true ? 'hidden' : 'content-show'}>
          <div className="accordion-body py-4 px-5 text-gray-400">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  readonly faqs: any[]
}

export const FAQ: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap w-10/12 mt-32 py-9 m-auto bg-[black] bg-opacity-50 rounded-xl">
        <div className="mt-5 p-5 text-white font-bold text-2xl text-center animate-pulse">
          <span>
            <span className="">
              Goread - Your #1 Instagram Maketing Service Provider
            </span>
          </span>
        </div>
        <div className="text-gray-400 px-5 font-bold text-lg text-center">
          <span>
            <span>1,000,000 happy customer’s can’t be wrong!</span>
          </span>
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:flex-nowrap md:space-x-3 md:space-y-0 justify-center">
          <div className="flex flex-col flex-wrap space-y-3 w-full md:w-1/2">
            {props.faqs.map((item, id) => {
              if (id % 2 === 0)
                return (
                  <Provider
                    key={id}
                    providerId={id}
                    title={item.question}
                    description={item.answer}
                  />
                )
            })}
          </div>
          <div className="flex flex-col flex-wrap space-y-3 w-full md:w-1/2">
            {props.faqs.map((item, id) => {
              if (id % 2 === 1)
                return (
                  <Provider
                    key={id}
                    providerId={id}
                    title={item.question}
                    description={item.answer}
                  />
                )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
