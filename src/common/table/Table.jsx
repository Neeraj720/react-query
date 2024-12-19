import React from "react";
import TableRow from "./TableRow";

function Table({ data, onDelete, onEdit, tableHeaders }) {
  return (
    <div className="container mt-3">
      <h3 className="text-center mb-3">Task Management System</h3>
      <div className=" table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              {tableHeaders.map((header) => {
                return (
                  <>
                    <th className="text-center">{header}</th>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* Table Row */}
            {data?.map((data, index) => (
              <TableRow
                key_data={data._id}
                item={data}
                index={index}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default React.memo(Table);
