type Props = {}
import { Table } from '@/components/atoms/Table'
export const CategoryList: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto">
        <div className="py-4 inline-block min-w-full">
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
