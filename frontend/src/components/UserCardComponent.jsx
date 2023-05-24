import UserCardModule from "./UserCardComponent.module.css"

const UserCardComponent =({floor, name}) => {
    return (
        <div className = {UserCardModule.userCard}>
            <div className = {UserCardModule.floor}>{floor}</div>
            <div className = {UserCardModule.name}>{name}</div>
        </div>
    )
}

export default UserCardComponent;