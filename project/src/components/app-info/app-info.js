import "./app-info.css";

const AppInfo = (props) => {
    const {getCash, getUp} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников:{getCash}</h2>
            <h2>Премию получат:{getUp}</h2>
        </div>
    )
}

export default AppInfo;