type Props = {}
import { Table } from '@/components/atoms/Table'
export const CategoryList: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Table
              checkable={true}
              headers={['Name', 'Url Slug', 'Sort', 'Status', 'Action']}
              data={[]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
