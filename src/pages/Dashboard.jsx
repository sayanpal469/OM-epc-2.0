import { useNavigate } from "react-router-dom";
import LoginTimer from "../components/loginTimer";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="main-content">
          <header>
            <div className="header-wrapper">
              <div className="header-title">
                <h1>Welcome, Subhojit</h1>
              </div>
              <div className="header-action">
                <LoginTimer />
              </div>
            </div>
          </header>
          <main>
            <section>
              <div className="flex justify-between w-full items-center">
                <h3 className="section-head">Overview</h3>
                <button
                  onClick={() => navigate("/calls")}
                  className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  View Calls
                </button>
              </div>
              <div className="analytics">
                <div className="analytic">
                  <div className="analytic-icon">
                    <span className="las la-heart"></span>
                  </div>
                  <div className="analytic-info">
                    <h4>New Calls</h4>
                    <h1>10</h1>
                  </div>
                </div>

                <div className="analytic">
                  <div className="analytic-icon">
                    <span className="las la-clock"></span>
                  </div>
                  <div className="analytic-info">
                    <h4> Today&rsquo;s Call</h4>
                    <h1>14</h1>
                  </div>
                </div>
                <div className="analytic">
                  <div className="analytic-icon">
                    <span className="las la-users"></span>
                  </div>
                  <div className="analytic-info">
                    <h4>Pending Calls</h4>
                    <h1>16</h1>
                  </div>
                </div>
                <div className="analytic">
                  <div className="analytic-icon">
                    <span className="las la-eye"></span>
                  </div>
                  <div className="analytic-info">
                    <h4>Total Calls</h4>
                    <h1>40</h1>
                  </div>
                </div>
              </div>
            </section>
            <section className="block-expense-report">
              {/* <h3 className="section-head">Expenses</h3> */}
              <div className="flex justify-between w-full items-center">
                <h3 className="section-head">Expenses</h3>
                <button className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  View Expenses
                </button>
              </div>
              <div className="expense">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Company Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Date">04/01/2016</td>
                      <td data-label="Amount">$1,190</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Date">04/01/2016</td>
                      <td data-label="Amount">$1,190</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Date">04/01/2016</td>
                      <td data-label="Amount">$1,190</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Date">04/01/2016</td>
                      <td data-label="Amount">$1,190</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between w-full items-center">
                <h3 className="section-head">Reports</h3>
                <button className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  View Reports
                </button>
              </div>
              <div className="report">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Company Name</th>
                      <th scope="col"> Assigned Date</th>
                      <th scope="col">Submit Date</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Assign Date">04/01/2016</td>
                      <td data-label="Submit Date">14/01/2016</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Assign Date">04/01/2016</td>
                      <td data-label="Submit Date">14/01/2016</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Assign Date">04/01/2016</td>
                      <td data-label="Submit Date">14/01/2016</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Company Name">Visa - 3412</td>
                      <td data-label="Assign Date">04/01/2016</td>
                      <td data-label="Submit Date">14/01/2016</td>
                      <td data-label="Actions">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
