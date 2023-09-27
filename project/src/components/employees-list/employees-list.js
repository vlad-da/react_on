import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({info, onDelete}) => {
    //Возвращает новый массив  
    
    const elements = info.map(el=> {
        //Более сложный вариант
        //let {id, ...itemList} = info;
        return (
            <EmployeesListItem key={el.id} 
                               name={el.name} 
                               salary={el.salary} 
                               increase={el.increase}
                               onDelete={() => onDelete(el.id)}
                               />
            //Более сложный вариант (равнозначный выше)
            // <EmployeesListItem key={id} {...itemList}/>
        )
    });

    return (
        <ul className="app-list list-group">

           {elements}
        </ul>
    )
}

export default EmployeesList;