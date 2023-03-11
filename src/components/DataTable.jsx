import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ReusableDataTable = (props) => {
  const {
    value,
    selection,
    onSelectionChange,
    onRowSelect,
    className,
    paginator,
    rows,
    rowsPerPageOptions,
    totalRecords,
    currentPage,
    onPageChange,
    loading,
    emptyMessage,
    scrollable,
    scrollHeight,
    responsive,
  } = props;

  return (
    <DataTable
      value={value}
      selection={selection}
      onSelectionChange={onSelectionChange}
      onRowSelect={onRowSelect}
      className={className}
      paginator={paginator}
      rows={rows}
      rowsPerPageOptions={rowsPerPageOptions}
      totalRecords={totalRecords}
      currentPage={currentPage}
      onPageChange={onPageChange}
      loading={loading}
      emptyMessage={emptyMessage}
      scrollable={scrollable}
      scrollHeight={scrollHeight}
      responsive={responsive}
    >
      {props.columns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
    </DataTable>
  );
};

export default ReusableDataTable;
