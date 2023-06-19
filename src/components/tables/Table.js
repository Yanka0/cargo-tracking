import React from "react";
import './Table.scss'
import {Container} from "react-bootstrap";

function Table({columns, rows}) {

    return (
        <Container>
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
        </Container>
    );
}

export default Table;
