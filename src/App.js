import './App.css';
// import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses';

const Xpenses = [
  {
    id: '0',
    title: "melon",
    amount: "200",
    date: new Date(2016, 2, 4)
  },
  {
    id: '1',
    title: "oranges",
    amount: "100",
    date: new Date(2020, 2, 11)
  },
  {
    id: '2',
    title: "devil Fruit",
    amount: "100000000000000000000000000000000",
    date: new Date(2015, 2, 13)
  },
  {
    id: '3',
    title: "mango",
    amount: "400",
    date: new Date(2011, 2, 4)
  },
  {
    id: '4',
    title: "dragonfruit",
    amount: "1400",
    date: new Date(2004, 7, 21)
  },
  {
    id: '5',
    title: "kiwi",
    amount: "2000",
    date: new Date(2014, 5, 18)
  },
  {
    id: '6',
    title: "apple",
    amount: "100",
    date: new Date(2020, 3, 22)
  },
]

function App() {
  return (
    <div>
      <h1>Let's Get Started</h1>
    <Expenses items={Xpenses}/>
    </div>
  );
}

export default App;
