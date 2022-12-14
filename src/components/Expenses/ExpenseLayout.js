import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import "./ExpenseLayout.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseLayout = (props) => {
  const [selectedYear, updateSelectedYear] = useState("");

  const SaveSelectedYear = (year) => {
    updateSelectedYear(year);
  };

  const filteredList = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return(
    <Card className="expenses">
      <ExpensesFilter onSelectedYear={SaveSelectedYear} />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
    </Card>
  );
};

export default ExpenseLayout;
