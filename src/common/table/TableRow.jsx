import React from "react";
import Button from "../buttons/Button";

function TableRow({ item, key_data, onDelete, onEdit, index }) {
  return (
    <tr key={key_data}>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{item?.title}</td>
      <td className="text-center">{item?.description}</td>
      <td className="text-center">
        <Button
          btnClass="btn btn-danger"
          label="Delete"
          onAction={onDelete}
          item={item}
        /> &nbsp; || &nbsp;
        <Button
          btnClass="btn btn-primary"
          label="Update"
          onAction={onEdit}
          item={item}
        />
      </td>
    </tr>
  );
}

export default TableRow;
