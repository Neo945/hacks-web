import React from 'react'
import '../../Assets/UserDashboard.css'

function UserDashboard() {
  return (
    <>
    <div className='applications'>
    <h3 className='text-center mb-4'>My Applications</h3>
      <table className="striped mt-3">
        <thead>
          <tr>
              <th>Company</th>
              <th>Status</th>
              <th>Applied On</th>
              <th>Application Status</th>
          </tr>
        </thead>

        <tbody>
        {[1,2,3,4].map(i => (
                <tr key={i}>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
                <td><span className="new badge blue" data-badge-caption="In Touch">{" "}</span></td>
              </tr>
              ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default UserDashboard;