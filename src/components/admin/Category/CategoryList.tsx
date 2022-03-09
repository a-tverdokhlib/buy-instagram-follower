type Props = {
  readonly categories: any
}
import { Table } from '@/components/atoms/Table'
export const CategoryList: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto">
        <div className="py-4 inline-block min-w-full">
          <div className="overflow-hidden">
            {/* <Table
              checkable={true}
              headers={['Name', 'Url Slug', 'Sort', 'Status', 'Action']}
              data={props.categories}
            /> */}
            <table className="min-w-full text-center border-collapse border border-slate-400">
              <thead className="border-b bg-gray-900">
                <tr>
                  <th
                    scope="col"
                    className="w-[20px] text-sm font-medium text-white px-6 py-4  border border-slate-700"
                  >
                    <input
                      className="h-4 w-4"
                      type="checkbox"
                      checked={false}
                      readOnly
                    />
                  </th>

                  <th
                    scope="col"
                    className="w-[280px] text-sm font-medium text-white px-6 py-4 border border-slate-700"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[300px] text-sm font-medium text-white px-6 py-4 border border-slate-700"
                  >
                    Url Slug
                  </th>
                  <th
                    scope="col"
                    className="w-[20px] text-sm font-medium text-white px-6 py-4 border border-slate-700"
                  >
                    Sort
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 border border-slate-700"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 border border-slate-700"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.categories.map((category, id) => {
                  return (
                    <tr key={category._id} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          checked={false}
                          readOnly
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.urlSlug}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.defaultSortingNumber}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.isActive}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
                        Edit, View, Delete
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
