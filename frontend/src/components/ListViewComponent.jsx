import { useState } from "react";
import UserCardComponent from "./UserCardComponent";
import ListViewModule from "./ListViewComponent.module.css";

const ListViewComponent = () => {
    //const [list, setList] = useState(null);
    const list = [
        {
            floor: "1W",
            name: "Johnny"
        },
        {
            floor: "2W",
            name: "Sasha"
        },
        {
            floor: "3W",
            name: "Shane"
        }
    ]
    return (
        <div className= {ListViewModule.mainContent}>
            <h1>Who's In?</h1>
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



