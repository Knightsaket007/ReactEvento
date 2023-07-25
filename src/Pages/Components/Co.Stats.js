import { FaEye } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { FaSellsy } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import MyChart from './MyChart';


const Co_Stats=()=>{
    return(
    <>
    
    
    <div id="dash-flex">
                    <div id="click-box" className="report-box" ><h1>Clicks <TbHandClick /></h1><p className="inner-record">150</p></div>
                    <div id="sale-box" className="report-box"><h1>Sale <FaSellsy /></h1><p className="inner-record">20</p></div>
                    <div id="earning-box" className="report-box"><h1>Earning <FaMoneyBill /></h1><p className="inner-record">$1000</p></div>


                </div>

                <div id="hr-ruler"></div>
                <br />
                <MyChart />

                <table id="ana-table">

                    <tr style={{ fontSize: "20px", backgroundColor: "black" }}>
                        <th>Product</th>
                        <th>product id</th>
                        <th>sale</th>
                        <th>earning</th>
                    </tr>



                    <tr>
                        <td>val 1fd  fgb fg bgf fbgv gvf  gfb fg gfgbfc b fv  gfrt</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>

                    <tr>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>

                    <tr>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>
                    <tr>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>

                </table>

                <div id="mob-hide"></div>

    
    </>)
}
export default Co_Stats