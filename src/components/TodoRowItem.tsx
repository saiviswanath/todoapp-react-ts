import React from "react";

export const TodoRowItem: React.FC<{
    rowNum: number,
    rowDesc: string,
    rowAssign: string,
    deletetodo: Function
}> = (props) => {
    return (
        <tr onClick={() => {props.deletetodo(props.rowNum)}}>
            <th scope='row'>{props.rowNum}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssign}</td>
      </tr>
    );
}