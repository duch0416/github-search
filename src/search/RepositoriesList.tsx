import React from "react";
import {
  useTable,
  usePagination,
  useSortBy
} from "react-table";

import { IColumn } from "../models/column.model";
import { IRepository } from "../models/repository.model";
import { ButtonWrapper } from "../styles/button.styles";

export interface RepositoriesListProps {
  columns: Array<IColumn>;
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
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination,
  );

  return (
    <>
      <ButtonWrapper>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          previous page
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          next page
        </button>
        <span>
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </ButtonWrapper>
      <table {...getTableProps()}>
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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RepositoriesList;
