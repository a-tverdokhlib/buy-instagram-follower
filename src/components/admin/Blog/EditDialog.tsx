export type EditDialogProps = {
  readonly blog: any
  readonly onClose: () => void
  readonly onBlogCreated: (d) => void
  readonly onBlogUpdated: (d) => void
}
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  basic,
  complex,
  formatting,
} from 'suneditor-react/dist/misc/buttonList'
import * as Yup from 'yup'

import { Loading } from '@/components/atoms/Loading'
import { SmallLoading } from '@/components/atoms/SmallLoading'
import { setThemeMode } from '@/redux/reducers/admin/panel'
import {
  setSidebarColor,
  setSideMenuLayout,
} from '@/redux/reducers/admin/sideMenu'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { blogService } from '@/services/blog'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const EditDialog: React.VFC<EditDialogProps> = (props) => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)
  // const [code, setCode] = useState('myMonacoEditor')
  const [_id, set_Id] = useState(props.blog ? props.blog._id : '-1')
  const [articleTitle, setArticleTitle] = useState(
    props.blog ? props.blog.articleTitle : '',
  )
  const [urlSlug, setUrlSlug] = useState(props.blog ? props.blog.urlSlug : '')
  const [thumbImageUrl, setThumbImageUrl] = useState(
    props.blog ? props.blog.thumbImageUrl : '',
  )
  const [postCategoryId, setPostCategoryId] = useState(
    props.blog ? props.blog.postCategoryId : '',
  )
  const [isActive, setIsActive] = useState(
    props.blog ? props.blog.isActive : false,
  )
  const [sort, setSort] = useState(props.blog ? props.blog.sort : '')
  const [metaKeywords, setMetaKeywords] = useState(
    props.blog ? props.blog.metaKeywords : '',
  )
  const [metaDescription, setMetaDescription] = useState(
    props.blog ? props.blog.metaDescription : '',
  )
  const [articleDescription, setArticleDescription] = useState(
    props.blog ? props.blog.articleDescription : '',
  )
  const [awaiting, setAwaiting] = useState(false)

  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const onSubmit = async (data) => {
    setAwaiting(true)
    if (data._id === '-1' || data._id === '') {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      const blog = await blogService.create({
        ...data,
        articleDescription: articleDescription,
      })
      if (blog) {
        setAwaiting(false)
        props.onClose()
        props.onBlogCreated(blog.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    } else {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      const blog = await blogService.update({
        ...data,
        articleDescription: articleDescription,
      })
      if (blog) {
        setAwaiting(false)
        props.onClose()
        props.onBlogUpdated(blog.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    }
  }

  return (
    <div className="admin-edit-category fixed right-1 top-1 h-[97vh] w-[98%] flex-col flex-wrap sm:w-[640px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
      <div className="flex fixed w-[98%] z-[100] sm:w-[640px] top-1 right-1 border-b-[1px] border-gray-300 bg-gray-100 p-5 rounded-t-xl">
        <span className="font-semibold text-black">
          <svg
            className="h-6 w-6 text-gray-800"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{' '}
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{' '}
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg>
        </span>
        <span className="text-gray-900 font-semibold ml-2">Edit Blog</span>
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
      <form onSubmit={handleSubmit((d) => onSubmit(d))}>
        <div className="flex mt-14 flex-col flex-wrap w-full p-2 ls:p-5 space-y-5">
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Article Title *</div>
            <div className="flex w-full">
              <input
                {...register('_id')}
                className="hidden"
                type="text"
                value={_id}
              />
              <input
                {...register('articleTitle')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="text"
                placeholder=""
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">URL Slug *</div>
            <div className="flex w-full">
              <span className="h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-700">
                https://goread.io/blog
              </span>
              <input
                {...register('urlSlug')}
                type="text"
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                placeholder=""
                value={urlSlug}
                onChange={(e) => setUrlSlug(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">
              Image thumbnail (900 * 500px) *
            </div>
            <div className="flex w-full">
              <input
                {...register('thumbImageUrl')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="text"
                placeholder=""
                value={thumbImageUrl}
                onChange={(e) => setThumbImageUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap space-x-0 space-y-3 sm:flex-row sm:flex-nowrap w-full sm:space-x-3 sm:space-y-0">
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">
                Post Categories *
              </div>
              <div className="flex w-full">
                <select
                  {...register('postCategoryId')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                  placeholder=""
                  value={postCategoryId}
                  onChange={(e) => setPostCategoryId(e.target.value)}
                >
                  <option value="1">Instagram</option>
                  <option value="2">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">Status</div>
              <div className="flex w-full">
                <select
                  {...register('isActive')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                  placeholder="link"
                  value={isActive === true ? 'active' : 'inactive'}
                  onChange={(e) =>
                    setIsActive(e.target.value === 'active' ? true : false)
                  }
                >
                  <option value="active">Active</option>
                  <option value="inactive">Deactive</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">Sorting Number</div>
              <div className="flex w-full">
                <input
                  {...register('sort')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  type="number"
                  placeholder=""
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">
              <span className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />{' '}
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                <span>
                  <span className="ml-3 text-lg font-semibold">
                    Page SEO informations
                  </span>
                </span>
              </span>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">Meta Keywords</div>
              <div className="flex w-full">
                <textarea
                  {...register('metaKeywords')}
                  className="w-full p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder=""
                  rows={3}
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">
                Meta description
              </div>
              <div className="flex w-full">
                <textarea
                  {...register('metaDescription')}
                  className="w-full p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder=""
                  rows={3}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">
                  Article description
                </span>
              </span>
            </div>
            <div className="flex">
              <SunEditor
                height="350px"
                setOptions={{
                  buttonList: basic.concat(formatting), // Or Array of button list, eg. [['font', 'align'], ['image']]
                  // plugins: [font] set plugins, all plugins are set by default
                  // Other option
                }}
                setContents={articleDescription}
                onChange={(content) => {
                  // setToggle((value) => !value)
                  setArticleDescription(content)
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap ss:flex-row ss:flex-nowrap w-full justify-end items-center p-5 space-x-0 space-y-3 ss:space-x-3 ss:space-y-0">
          <input
            type="submit"
            className="flex bg-[#45aaf2] py-3 px-7 rounded-full hover:cursor-pointer hover:bg-fuchsia-500 transition-colors duration-500"
            value="SUBMIT"
          ></input>
          <div
            onClick={props.onClose}
            className="flex bg-gray-600 py-3 px-7 rounded-full hover:cursor-pointer hover:bg-gray-900 transition-colors duration-500"
          >
            <span>
              <span>CANCEL</span>
            </span>
          </div>
        </div>
      </form>
      <div
        className={
          !awaiting
            ? 'awaiting hidden fixed top-1 right-1 w-full h-[97vh] sm:w-[640px] bg-opacity-50 bg-gray-800 rounded-lg z-[1002]'
            : 'awaiting fixed flex items-center justify-center top-1 right-1 w-full h-[97vh] sm:w-[640px] bg-opacity-50 bg-gray-800 rounded-lg z-[1002]'
        }
      >
        <Loading />
      </div>
    </div>
  )
}
export default EditDialog
