import { useState, useEffect } from 'react';
import ParentCompaniesRow from '../parentCompaniesRow/parentCompaniesRow';
import SearchBar from '../searchBar/searchBar';

function ParentCompaniesList(props) {
    const [companies, setCompanies] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => {
                setCompanies(data);
                setFilteredCompanies(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    props.showCompanyListSize(filteredCompanies.length);

    let rows = [];

    let limit = 300;
    for (let i of filteredCompanies) {
        rows.push(<ParentCompaniesRow key={i.id} data={i} />);
        limit--;
        if (!limit)
            break;
    }

    return (
        <>
            <SearchBar companies={companies} setFilteredCompanies={setFilteredCompanies} />
            <div style={{ height: "80vh", overflow: "auto" }}>
                {rows.length ? rows : "No records found"}
            </div>
        </>
    );
}

export default ParentCompaniesList;
