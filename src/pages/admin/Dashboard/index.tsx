type Props = {
  readonly logout: () => void
}
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

import { userService } from '@/services/user'

const DashBoard: React.VFC<Props> = (props) => {
  const [cookie, setCookie] = useCookies(['user'])

  const router = useRouter()
  const user = userService.userValue
  if (!user) {
    return (
      <div className="flex flex-col flex-wrap w-full text-white items-center justify-center">
        <div className="flex w-full">
          <span>
            <span>Dashboard</span>
          </span>
        </div>
        <div className="w-full">
          <button onClick={() => router.back()}>History Back</button>
        </div>
      </div>
    )
  }

  const signout = () => {
    setCookie('user', null, {
      path: '/',
      maxAge: -1, // Expires after 1hr
      sameSite: true,
    })
    userService.logout()
  }
  return (
    <div className="flex flex-col flex-wrap w-full text-white items-center justify-center">
      <div className="flex w-full">
        <span>
          <span>Dashboard</span>
        </span>
      </div>
      <div className="w-full">
        <button onClick={signout}>Logout</button>
      </div>
    </div>
  )
}
export default DashBoard
