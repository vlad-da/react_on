import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({info}) => {
    //Возвращает новый массив  
    const elements = info.map(el=> {
        return (
            <EmployeesListItem name={el.name} salary={el.salary} increase={el.increase}/>
        )
    });

    return (
        <ul className="app-list list-group">

           {elements}
        </ul>
    )
}

export default EmployeesList;