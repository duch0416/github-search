import { spawn } from "child_process";
import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";

import { setSortBy } from "../context/repositoriesActions";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import { IColumn } from "../models/column.model";
import { IRepository } from "../models/repository.model";
import { InterfaceWrapper } from "../styles/interface.styles";

export interface RepositoriesListProps {
  columns: Array<IColumn>;
  data: Array<IRepository>;
  column: string;
  descending: boolean;
  dispatch: React.Dispatch<any>;
}

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  columns,
  data,
  column,
  descending,
  dispatch,
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
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: [
          {
            id: column,
            desc: descending,
          },
        ],
      },
    },
    useSortBy,
    usePagination
  );

  useEffectAfterMount(() => {
    dispatch(setSortBy({ column: sortBy[0]?.id, descending: sortBy[0]?.desc }));
  }, [JSON.stringify(sortBy)]);

  return (
    <>
      {data.length ? (
        <>
          <InterfaceWrapper>
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
          </InterfaceWrapper>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
      ) : (
        <div><span>lack of data</span></div>
      )}
    </>
  );
};

export default RepositoriesList;
