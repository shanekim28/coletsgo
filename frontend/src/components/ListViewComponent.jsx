import UserCardComponent from "./UserCardComponent";
import ListViewModule from "./ListViewComponent.module.css";
import { useEffect, useState } from 'react';

const ListViewComponent = () => {
    const [list, setList] = useState([]);

    const FetchApi = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/list`)
            .then((response) => response.json())
            .then((data) => setList(data));    
    }

    useEffect(() => {FetchApi()}, []);

    return (
        <div className= {ListViewModule.mainContent}>
            <p className = {ListViewModule.pheader}>WHO'S IN?</p>
            <div className = "listContainer">
                {
                list.length > 0 && list.map((item) => 
                <UserCardComponent floor = {item.floor} name = {item.name}/>)
                }
            </div>
        </div>
    )
}

export default ListViewComponent;



