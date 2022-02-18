type ReviewItemProps = {
  readonly feedbackInfo: any
}
import { useState } from 'react'

import { Image } from '@/components/atoms/Image'
import SubmitReview from '@/components/organisms/SubmitReview'
const stars = [1, 2, 3, 4, 5]
const ReviewItem: React.FC<ReviewItemProps> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full bg-black bg-opacity-50 rounded-xl p-5">
      <div className="flex flex-row flex-nowrap space-x-2">
        <div className="flex items-center">
          {stars.map((item, id) => {
            return (
              <svg
                key={id}
                className="h-4 w-4 text-yellow-400 fill-yellow-400 hover:scale-125"
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
        <div className="flex items-center text-center">
          {props.feedbackInfo.mark}
        </div>
      </div>
      <div className="w-full">
        <span>
          <span>{props.feedbackInfo.productInfo.name}</span>
        </span>
      </div>
      <div className="w-full mt-3 text-gray-400">
        <span>
          <span>{props.feedbackInfo.comment}</span>
        </span>
      </div>
      <div className="flex flex-row flex-nowrap w-full mt-3">
        <div className="flex w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={props.feedbackInfo.customerInfo.avatar}
            alt="Avatar"
            width="32px"
            height="32px"
          />
        </div>
        <div className="flex ml-2">
          <span>
            <span>{props.feedbackInfo.customerInfo.username}</span>
          </span>
        </div>
        <div className="flex ml-auto items-center text-gray-500 text-sm">
          <span>
            <span>{props.feedbackInfo.ago} days ago</span>
          </span>
        </div>
      </div>
    </div>
  )
}
const feedbackList = [
  {
    reviewId: 0,
    mark: 5,
    ago: 1,
    productInfo: {
      id: 0,
      name: '50k Instagram Followers',
    },
    comment:
      'Great experience buying 50k Instagram Followers. Instant purchase & delivery.',
    customerInfo: {
      username: 'Doggblitz4',
      avatar: '/img/avt-template.jpg',
    },
  },
  {
    reviewId: 0,
    mark: 5,
    ago: 1,
    productInfo: {
      id: 0,
      name: '50k Instagram Followers',
    },
    comment:
      'Great experience buying 50k Instagram Followers. Instant purchase & delivery.',
    customerInfo: {
      username: 'Doggblitz4',
      avatar: '/img/avt-template.jpg',
    },
  },
  {
    reviewId: 0,
    mark: 5,
    ago: 1,
    productInfo: {
      id: 0,
      name: '50k Instagram Followers',
    },
    comment:
      'Great experience buying 50k Instagram Followers. Instant purchase & delivery.',
    customerInfo: {
      username: 'Doggblitz4',
      avatar: '/img/avt-template.jpg',
    },
  },
  {
    reviewId: 0,
    mark: 5,
    ago: 1,
    productInfo: {
      id: 0,
      name: '50k Instagram Followers',
    },
    comment:
      'Great experience buying 50k Instagram Followers. Instant purchase & delivery.',
    customerInfo: {
      username: 'Doggblitz4',
      avatar: '/img/avt-template.jpg',
    },
  },
  {
    reviewId: 0,
    mark: 5,
    ago: 1,
    productInfo: {
      id: 0,
      name: '50k Instagram Followers',
    },
    comment:
      'Great experience buying 50k Instagram Followers. Instant purchase & delivery.',
    customerInfo: {
      username: 'Doggblitz4',
      avatar: '/img/avt-template.jpg',
    },
  },
]
export const Feedback: React.VFC = () => {
  const [showDlg, setShowDlg] = useState(false)
  const submitReview = () => {
    setShowDlg(true)
  }
  const onCloseDlg = () => {
    setShowDlg(false)
  }
  return (
    <div className="feedback flex flex-col flex-wrap w-full p-8 md:p-12 items-center bg-[#222232]">
      <div className="mt-10 flex w-full items-center justify-center">
        <span className="text-white text-center text-3xl">
          <span>Customer Feedback & Reviews</span>
        </span>
      </div>
      <div className="flex w-full mt-10 md:w-6/12 items-center justify-center px-3">
        <span className="text-gray-500 text-lg md:text-2xl text-center">
          <span>
            Here at Goread we pride ourselves in exceptional service and
            affordable prices. Don’t just take our word for it – check out our
            customer reviews below
          </span>
        </span>
      </div>
      <div className="flex flex-col flex-wrap w-full items-center mt-10 space-y-3 md:space-y-0">
        <div className="flex flex-col w-full md:w-1/2 justify-center text-white">
          <div
            onClick={submitReview}
            className="flex space-x-2 absolute rounded-full p-3 gradient-btn items-center justify-center hover:cursor-pointer"
          >
            <svg
              className="h-5 w-5 text-white z-10"
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
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
            <span className="text-sm md:text-base">Submit Your Review</span>
          </div>{' '}
          {showDlg === true ? <SubmitReview onClose={onCloseDlg} /> : <></>}
          <div className="mt-3 h-screen overflow-auto rounded-xl">
            <div className="flex flex-col flex-wrap w-full space-y-3">
              {feedbackList.map((item, id) => {
                return <ReviewItem key={id} feedbackInfo={item} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
