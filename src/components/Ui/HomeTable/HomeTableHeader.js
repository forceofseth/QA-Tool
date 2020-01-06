import React from "react";

function HomeTableHeader() {
    return (
        <thead>
        <tr>
            <th>Project ID</th>
            <th className="centeredTableElement">Approved</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Product</th>
            <th>Lead</th>
            <th>Web</th>
            <th className="centeredTableElement">Comments</th>
            <th className="centeredTableElement">Edit</th>
            <th className="centeredTableElement">Archive</th>
        </tr>
        </thead>
    )
}

export default HomeTableHeader;