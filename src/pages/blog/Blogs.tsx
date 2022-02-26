import { BlogCard } from './BlogCard'

type Props = {
  readonly blogs: any[]
}
export const Blogs: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center justify-center">
      {props.blogs.map((item, id) => {
        return <BlogCard key={id} info={item} />
      })}
    </div>
  )
}
