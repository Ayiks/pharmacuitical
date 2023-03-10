import react from "react";
import NavBar from '../Navbar/Navbar'
import NavComponent from '../Navbar/components/NavComponent'
import Footer from '../Footer/Footer'
function HomePage(){
    return(
        <div className="bg-light">
            <NavBar title="PuillPLUS"/>
            <div className="mt-5 d-flex flex-column">
                <h2 className="m-4">
                    Welcome to PILLPLUS Pharmacy, Click a module to start
                </h2>
                
                    <div className="container-fluid m-5 w-100 overflow-x-scroll d-flex flex-direction-row">
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                        <NavComponent name="Home"/>
                    </div>
            
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage;