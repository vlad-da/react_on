import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {name: 'Saha V.', salary: '800', star:true, increase: false, id: 1},
        {name: 'Timur S.', salary: '900', star:false, increase: false, id: 2},
        {name: 'Vlad V.', salary: '1000', star:false, increase: true, id: 3},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    })
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id);
      const old = data[index];
      const newItem = {...old, increase : !old.increase};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onToggleRise = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id);
      const old = data[index];
      const newItem = {...old, star : !old.star};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

render() {
  const employees = this.state.data.length;
  const incr = this.state.data.filter((el) => el.increase).length;
  return (
    <div className="app">
        <AppInfo getCash={employees}
        getUp={incr}
        />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList info = {this.state.data}
                       onDelete={this.deleteItem}
                       onToggleIncrease = {this.onToggleIncrease}
                       onToggleRise = {this.onToggleRise}/>
        <EmployeesAddForm/>
    </div>
  );
}
  
}

export default App;
