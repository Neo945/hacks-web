import { useEffect, useState } from "react"
import lookup from "../fetchData/lookup";

export default (props) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        // const [data, status] = lookup();
        // setState(data);
    })
    return (
        <div>
            <ul>
                {[1,2,3,4,5].map(i => (
                    <li className="applicant-list" 
                        key={i}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto auto auto auto'
                        }}
                    >
                        <div className="applicant-name">
                            Name
                        </div>
                        <div className="applicant-status">
                            Selected
                        </div>
                        <div className="applicant-join">
                            <button>Send Verification</button>
                        </div>
                        <div className="applicant-joined">
                            <button>Applicant Joined</button>
                        </div>
                    </li>
                ))}
           </ul>
        </div>
    )
}