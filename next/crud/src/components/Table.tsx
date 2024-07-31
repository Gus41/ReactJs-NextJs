import Client from "@/core/client"

interface TableProps {
  clients: Client[],
  selectClient?: (client: Client) => void,
  deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  function renderActions(client: Client) {
    return (
      <td className="p-4 flex flex-row items-center justify-center">
        {props.selectClient ?
          <button className="p-2 text-green-900 hover:text-green-600"
            onClick={() => {
              if (props.selectClient) {
                props.selectClient(client)
              }
            }}
          >
            Editar
          </button> : false}
        {props.deleteClient ?
          <button className="p-2 text-red-900 hover:text-red-500"
            onClick={() => {
              if (props.deleteClient) {
                props.deleteClient(client)
              }
            }}>
            Deletar
          </button> : false}

      </td>
    )
  }

  function renderClients() {
    return props.clients?.map((e, i) => {
      return (
        <tr key={i}
          className={`${i % 2 == 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
        >
          <td className="text-left p-4">{i}</td>
          <td className="text-left p-4">{e.getName()}</td>
          <td className="text-left p-4">{e.getAge()}</td>
          {renderActions(e)}
        </tr>
      )
    })
  }

  return (
    <div>
      <table className="w-full shadow-md rounded">
        <thead className="bg-gradient-to-r from-gray-200 to-gray-400">
          <tr>
            <th className="text-left p-4">Code</th>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Age</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderClients()}
        </tbody>
      </table>
    </div>
  )
}
