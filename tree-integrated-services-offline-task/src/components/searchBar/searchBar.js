import React, { useEffect } from 'react';
import { useState } from "react";
import "./searchBar.css";

export default function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    props.setFilteredCompanies(props.companies.filter(company => company.title.includes(searchText)));
  }, [searchText]);

  return (
    <>
      <div className="outer-div">
        <input type="text" className="search-input" value={searchText} placeholder="Search Companies" onChange={(e) => setSearchText(e.target.value)}/>
        <hr />
      </div>
    </>
  )
}
