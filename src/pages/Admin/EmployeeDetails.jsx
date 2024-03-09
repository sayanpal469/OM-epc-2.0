import { useLazyQuery, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import {
  GET_ATTENDENCE_BY_ENG,
  GET_CALLS_BY_ENGINEER,
  GET_EXPENSE_BY_ENG,
} from "../../graphql/queries/graphql_queries";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import EngineerGraph from "./EngineerGraph";

const EmployeeDetails = ({ open, setOpen, EMP_id }) => {
  const [calls, setCalls] = useState([]);

  const cancelButtonRef = useRef(null);
  const { data } = useQuery(GET_CALLS_BY_ENGINEER, {
    variables: {
      engEmp: EMP_id,
      status: "ALL",
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const [getAttendenceByEng, { data: attendenceData }] = useLazyQuery(
    GET_ATTENDENCE_BY_ENG,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );

  const [getExpenseByEng, { data: expenseData }] = useLazyQuery(
    GET_EXPENSE_BY_ENG,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );

  useEffect(() => {
    if (data) {
      setCalls(data?.callsByEng?.call_list);
    }
    getAttendenceByEng({
      variables: {
        engEmp: EMP_id,
      },
    });
    getExpenseByEng({
      variables: {
        engEmp: EMP_id,
      },
    });
  }, [data]);

  return (
    <>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl my-10">
                    <div className="py-2">
                      <div className="text-center text-4xl sm:text-5xl mt-4">
                        <h1 className="font-bold">Souvik Das</h1>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between mx-4  px-4 ">
                        <div className="text-lg sm:text-xl font-bold  mb-4 sm:mb-0">
                          <EngineerGraph
                            calls={calls}
                            attendenceData={attendenceData}
                            expenseData={expenseData}
                          />
                        </div>
                        {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-lg sm:text-xl my-2">
      {data ? (
        <div className="mt-3 sm:ml-4 sm:mt-0 my-4">
          <div>
       
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold">Call details</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Total calls- {calls.length}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Pending calls- {pendingCalls.length}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Completed calls- {completedCalls.length}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-lg sm:text-xl">No calls found</p>
      )}
      <div className="my-10">
        <div>
          <h1 className="mb-2 text-2xl sm:text-3xl font-bold">Expense details</h1>
        </div>
        <div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Total Expense - 100
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Expense Approved - 50
          </p>
        </div>
      </div>
    </div> */}
                      </div>
                      <div className="px-4 py-2 sm:flex sm:flex-row-reverse justify-center">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
};

EmployeeDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  EMP_id: PropTypes.string.isRequired,
};

export default EmployeeDetails;
