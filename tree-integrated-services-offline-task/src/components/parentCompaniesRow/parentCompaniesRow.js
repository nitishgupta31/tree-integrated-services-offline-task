import React from 'react';
import "./parentCompaniesRow.css";

function ParentCompaniesRow(props) {

    let { url, title } = props.data;

    return (
        <a href="#clicked">
            <div className="parent-company-row">
                <div className="column-left">
                    <img src={url} className="col-image" alt="logo" />
                    <div className="col-title">
                        <p>{title.length < 10 ? title : title.substring(0, 20) + "..."}</p>
                    </div>
                </div>
                <div className="column-right">{1}</div>
            </div>
        </a>
    );
}

export default ParentCompaniesRow;
