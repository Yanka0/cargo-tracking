import React from "react";

import './Table.scss'

function Table({columns, rows}) {

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.name}>
                            {column.name}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {
                    rows.map((row, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={column.name}>
                                    {
                                        column.renderer(row, index)
                                    }
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
