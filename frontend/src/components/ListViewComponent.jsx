import UserCardComponent from "./UserCardComponent";
import ListViewModule from "./ListViewComponent.module.css";
import { useEffect, useState } from 'react';

const ListViewComponent = () => {
    const [list, setList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const FetchApi = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/list`)
            .then((response) => response.json())
            .then((data) => setList(data));    
        setLoaded(true);
    }

    useEffect(() => {
        FetchApi();
        const interval = setInterval(() => {
            FetchApi();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className= {ListViewModule.mainContent}>
            <p className = {ListViewModule.pheader}>WHO'S IN?</p>
            <div className = "listContainer">
                { loaded ? (list.length > 0 && list.map((item) => 
                <UserCardComponent floor = {item.floor} name = {item.name}/>)) : <p>Gathering gremlins...</p>}
            </div>
        </div>
    )
}

export default ListViewComponent;