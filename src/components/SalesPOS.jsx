import react from 'react'
import '../css/sidepos.css'
function SalesPOS(){
    return (
        <div className="side_pos">
            <div className="upper_add">
                <div className="btn">
                <i className="ri-add-line"></i>
                Add Customer
                </div>
                <div className="right">
                    <div className="btnIcon">
                    <i className="ri-add-line"></i>
                    </div>
                    <div className="btnIcon">
                    <i className="ri-menu-line"></i>
                    </div>
                    <div className="btnIcon">
                    <i className="ri-refresh-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SalesPOS