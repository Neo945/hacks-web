import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import lookup from "../fetchData/lookup";

const CompanyDashboard = (props) => {
  const [application, setApplication] = useState([]);
  useEffect(() => {
    const [data, status] = lookup("POST", JSON.stringify({company: props.company}), '/get/booked/slots', {
      "Content-type": "application/json"
    });
    if (status === 200) {
      setApplication(data.slots);
    }
  })
    return (
        <>
        <div className='applications'>
        <h3 className='text-center mb-4'>Candidates Applications</h3>
          <table className="striped mt-3">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Profile</th>
                  <th>Applied On</th>
                  <th>Send Join</th>
                  <th>Application Status</th>
                  <th>Time slot</th>
              </tr>
            </thead>
    
            <tbody>
              {application.map((data, i) => (
                <tr key={i}>
                <td><NavLink to={`/userid`}>Alvin</NavLink></td>
                <td>Eclair</td>
                <td>$0.87</td>
                <td><span className="new badge blue" data-badge-caption="Send Email">{" "}</span></td>
                {/* <td><span className="new badge grey" data-badge-caption="Timeslot selected">{" "}</span></td> */}
                <td><span className="new badge blue" data-badge-caption="In Touch">{" "}</span></td>
                <td>1/2/2020 at 1 AM</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
    );
};

export default CompanyDashboard;