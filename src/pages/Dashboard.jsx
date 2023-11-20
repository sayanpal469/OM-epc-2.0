import { useNavigate } from "react-router-dom";
import LoginTimer from "../components/loginTimer";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="">
          <header
            className="bg-cover bg-center h-125 p-16"
            style={{
              backgroundImage:
                "url('https://static.vecteezy.com/system/resources/previews/006/304/619/original/dark-black-square-pattern-on-glowing-red-neon-abstract-background-in-technology-style-modern-futuristic-geometric-shape-web-banner-design-you-can-use-for-cover-template-poster-illustration-vector.jpg')",
            }}
          >
            <div className="lg:flex md:flex justify-between text-white ">
              <div>
                <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">
                  Welcome, Subhojit
                </h1>
              </div>
              <div className="mt-5 lg:m-t-0">
                <LoginTimer />
              </div>
            </div>
          </header>
          <main className="mt-5">
            <section>
              <div className="flex justify-between w-full items-center px-10">
                <h3 className="lg:text-3xl text-xl font-semibold">Overview</h3>
                <button
                  onClick={() => navigate("/calls")}
                  className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  View Calls
                </button>
              </div>

              <div className="grid lg:grid-cols-2 mx-auto w-auto mt-10 px-10 gap-10">


                <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                  <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full">
                    {/* <span className="text-white text-3xl">📞</span> */}
                  </div>
                  <div className="analytic-info">
                    <h4>New Calls</h4>
                    <h1 className="font-bold">10</h1>
                  </div>
                </div>
                <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                  <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full">
                    {/* <span className="text-white text-3xl">📞</span> */}
                  </div>
                  <div className="analytic-info">
                    <h4>{`Today's Calls`}</h4>
                    <h1 className="font-bold">14</h1>
                  </div>
                </div>
                <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                  <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full">
                    {/* <span className="text-white text-3xl">📞</span> */}
                  </div>
                  <div className="analytic-info">
                    <h4>Pending Calls</h4>
                    <h1 className="font-bold">16</h1>
                  </div>
                </div>
                <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                  <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full">
                    {/* <span className="text-white text-3xl">📞</span> */}
                  </div>
                  <div className="analytic-info">
                    <h4>Total Calls</h4>
                    <h1 className="font-bold">40</h1>
                  </div>
                </div>

              </div>
            </section>

            {/* <section className="block-expense-report">
              <div className="flex justify-between w-full items-center">
                <h3 className="section-head">Expenses</h3>
                <button
                  onClick={() => navigate("/expenses")}
                  className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
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
            </section> */}



          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
