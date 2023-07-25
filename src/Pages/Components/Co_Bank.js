function Co_Bank() {
    return (
        <>
                <img src="/ReactEvento/images/bank.svg" alt="fetching..." id="bnk-ills" />

            <div id="acc-info-div">
                <form >
                    <label>Account Number</label><br />
                    <input className="edit-inputs inp-pos" type="number"></input><br />
                    <label>IFSC Code</label><br />
                    <input className="edit-inputs inp-pos"></input>
                </form>
            </div>



            <img src="/ReactEvento/images/upi.svg" alt="fetching..." id="bnk-ills" />

            <div id="acc-info-div">
                <form id="pay-in" >
                    <label>UPI id</label><br />
                    <input className="edit-inputs inp-pos" ></input><br />
                    <label>UPI linked Ph. Number</label><br />
                    <input className="edit-inputs inp-pos" type="number"></input>
                </form>

            </div>

            <div id="btn-cen"><button className=" custom-btn btn-2 sm-ch">Submit</button></div>

        </>
    )

}
export default Co_Bank