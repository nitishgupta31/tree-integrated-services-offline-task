import './Sidebar.css'
function App() {
  return (
    <>
    <div className="row ">
       <div className="col-lg-3 sidebar-section">
        <div className="company-name"> <h3 className="tree">tree</h3> <h1 className="greens">greens</h1></div>
        <hr></hr>
         <div  className="categories"><i class="fa-solid fa-star logo"></i>Companies </div>
         <div  className="categories"><i class="fa-regular fa-cube logo"></i>Products </div>
         <div  className="categories"><i class="fa-brands fa-windows logo"></i>Categories </div>
         <hr></hr>
         </div>

       </div> 
    </>
  );
}

export default App;
