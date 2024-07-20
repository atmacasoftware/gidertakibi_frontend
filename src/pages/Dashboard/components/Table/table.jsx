import { useTable } from "react-table";

export function Table({columns, data}) {

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns, data})

  return (
    <div className="card shadow-sm table-card">
      <div className="card-header">
        <div className="text-end">
          <form action="">
            <input type="search" className="table-search" />
          </form>
        </div>
      </div>
      <div className="card-body">
        <div class="table-responsive">
          <table class="table table-hover text-nowrap" id="productTable" {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
            </thead>
            <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
