import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: 'Saha V.', salary: '800', increase: false, id: 1},
    {name: 'Timur S.', salary: '900', increase: false, id: 2},
    {name: 'Vlad V.', salary: '1000', increase: true, id: 3},
  ];


  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList info = {data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
