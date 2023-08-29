import React from 'react';
import SubHeader from '../../sharedComponents/SubHeader';

const NotificationSetting = () => {
  return (
    <main id="cx-main" className="notification_settings">
      <div className="cx-main-card">
        <SubHeader />
        <div className="mainLandingCard cx-mb-20" data-aos="zoom-in"
          data-aos-duration="500">
          <div className="tableBorders" id="customizeTable">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Type</th>
                  <th>Push Notification</th>
                  <th className="insideTd">Email</th>
                  <th>SMS</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                <tr>
                  <td>1</td>
                  <td>1Notifications related announcements</td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Notifications related holidays & vacations</td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Notifications related pickup points</td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Notify while vehicle breakes speed limit</td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Notify while vehicle breakes geofence boundary</td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Notify while vehicle tracker external power on</td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotificationSetting
