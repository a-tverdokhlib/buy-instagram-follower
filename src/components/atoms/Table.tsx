type Props = {
  readonly checkable: boolean
  readonly headers: string[]
  readonly data: any[]
}

export const Table: React.FC<Props> = (props) => (
  <table className="min-w-full text-center border-collapse border border-slate-400">
    <thead className="border-b bg-gray-900">
      <tr>
        {props.checkable ? (
          <th
            scope="col"
            className="w-[20px] text-sm font-medium text-white px-6 py-4  border border-slate-700"
          >
            <input className="h-4 w-4" type="checkbox" checked={false} />
          </th>
        ) : (
          <></>
        )}
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
      <tr className="bg-white border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
          1
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
          Mark
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
          Otto
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
          @mdo
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
          Active
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border border-slate-300">
          Edit, View, Delete
        </td>
      </tr>
    </tbody>
  </table>
)
