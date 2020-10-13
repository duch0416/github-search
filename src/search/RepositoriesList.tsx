import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import { useParams } from "../hooks/useParams";

import { IColumn } from "../models/column.model";
import { Params } from "../models/params.enum";
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
  const { setParams, getParams } = useParams();
  const {
    headerGroups,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  useEffectAfterMount(() => {
    setParams({ name: Params.COLUMN, value: sortBy[0]?.id});
    setParams({ name: Params.DESCENDING, value: sortBy[0]?.desc});
  }, [sortBy[0]]);

  
  return (
    <>
      <ButtonWrapper>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          previous page
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          next page
        </button>

        {pageOptions.length ? (
          <>
            <span>
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </>
        ) : null}
      </ButtonWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
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
