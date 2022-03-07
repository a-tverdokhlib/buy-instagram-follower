export type ThemeCustomizerProps = {
  readonly onClose: () => void
}

import { setThemeMode } from '@/redux/reducers/admin/panel'
import {
  setSidebarColor,
  setSideMenuLayout,
} from '@/redux/reducers/admin/sideMenu'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'

const ThemeCustomizer: React.VFC<ThemeCustomizerProps> = (props) => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)

  const setLayoutMode = (e) => {
    dispatch(setSideMenuLayout(e))
  }

  const setColorOption = (e) => {
    dispatch(setSidebarColor(e))
  }

  return (
    <div className="theme-customizer fixed right-1 top-1 flex flex-col flex-wrap w-[400px] bg-fuchsia-300 shadow-lg shadow-cyan-700/50 rounded-xl">
      <div className="flex border-b-2 w-full p-5">
        <span className="font-semibold text-black">
          <svg
            className="h-6 w-6 text-gray-900"
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
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{' '}
            <circle cx="12" cy="12" r="3" />
          </svg>{' '}
        </span>
        <span className="text-gray-900 font-semibold ml-2">
          THEME CUSTOMIZER
        </span>
        <span className="ml-auto hover:cursor-pointer" onClick={props.onClose}>
          <svg
            className="h-6 w-6 text-gray-500"
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
            <line x1="18" y1="6" x2="6" y2="18" />{' '}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col flex-wrap w-full p-5 space-y-5">
        <div className="flex flex-col flex-wrap w-full">
          <div>Day/Light Mode</div>
          <div className="flex flex-row flex-nowrap space-x-5 w-full">
            <div
              onClick={() => dispatch(setThemeMode('day'))}
              className="flex items-center w-full hover:cursor-pointer"
            >
              <span
                className={
                  themeMode === 'day'
                    ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                    : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                }
              ></span>
              <span className="ml-3">Day</span>
            </div>
            <div
              onClick={() => dispatch(setThemeMode('night'))}
              className="flex w-full hover:cursor-pointer"
            >
              <span
                className={
                  themeMode === 'night'
                    ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                    : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                }
              ></span>
              <span className="ml-3">Night</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full">
          <div>Layout Option</div>
          <div className="flex flex-row flex-nowrap space-x-5 w-full">
            <div
              onClick={() => setLayoutMode('expanded')}
              className="flex w-full hover:cursor-pointer"
            >
              <span
                className={
                  layout === 'expanded'
                    ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                    : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                }
              ></span>
              <span className="ml-3">Expanded Menu</span>
            </div>
            <div
              onClick={() => setLayoutMode('collapsed')}
              className="flex w-full hover:cursor-pointer"
            >
              <span
                className={
                  layout === 'collapsed'
                    ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                    : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                }
              ></span>
              <span className="ml-3">Collapsed Menu</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full">
          <div>Sidebar color option</div>
          <div className="flex flex-row flex-nowrap space-x-5 w-full">
            <div
              onClick={() => setColorOption('light')}
              className="flex w-full hover:cursor-pointer"
            >
              <span
                className={
                  sidebarColor === 'light'
                    ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                    : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                }
              ></span>
              <span className="ml-3">Light</span>
            </div>
            <div
              onClick={() => setColorOption('dark')}
              className="flex w-full hover:cursor-pointer"
            >
              <span
                className={
                  sidebarColor === 'dark'
                    ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                    : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                }
              ></span>
              <span className="ml-3">Dark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThemeCustomizer
