import './companyListContainer.css';
import { useState } from 'react';
import ParentCompaniesList from '../parentCompaniesList/parentCompaniesList';
function CompanyListContainer() {
  const [companies, setCompanies] = useState([]);
  const handleDataFromChild = data => {
    setCompanies(data)
    console.log(data);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-5" style={{backgroundColor:"",height: "100vh"}}>
            <div className="row tableHeader">
                <div className="col">
                <h3 className="parentCompanies">Parent Companies {companies}</h3>
                </div>
                <div className="col addCompanybtn">
                <button type="button" class="btn " id="add-company-button">Add company +</button>
                </div>
            </div>
            <ParentCompaniesList showCompanyListSize={handleDataFromChild} />
        </div>
        <div className="col-lg-7" style={{backgroundColor:"#fdfafa",height: "100vh"}}></div>
      </div>
    </div>
  );
}

export default CompanyListContainer;
