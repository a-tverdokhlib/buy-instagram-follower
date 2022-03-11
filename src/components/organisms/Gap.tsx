import Image from 'next/image'

import { Layout } from '@/components/atoms/Layout'

export const Gap: React.VFC = () => {
  return (
    <div className="flex flex-col w-full h-[350px] bg-[#222232] bg-[url('/img/wave_background.png')] bg-no-repeat bg-cover bg-bottom"></div>
  )
}
