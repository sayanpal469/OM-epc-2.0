import ExpenseTable from "../components/ExpenseTable";

const Expenses = () => {
  return (
    <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1">
        <ExpenseTable />
      </div>
    </div>
  );
};

export default Expenses;
