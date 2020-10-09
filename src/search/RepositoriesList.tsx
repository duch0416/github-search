import React from "react";
import { useTable } from "react-table";

import { IColumn } from "../models/column.model";
import { IRepository } from "../models/repository.model";

export interface RepositoriesListProps {
  columns: Array<any>;
  data: Array<IRepository>;
}

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  columns,
  data,
}) => {
  const {
    headerGroups,
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });



  return (
    <table {...getTableProps()}>
       <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default RepositoriesList;
