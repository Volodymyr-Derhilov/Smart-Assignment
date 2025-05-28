import { User } from "../../redux/users/usersSlice"
import css from "./UserItem.module.css"

interface UserItemProps {
    user: User,
}

export default function UserItem({user} : UserItemProps) {
    return (
        <ul className={css.user__info}>
            <li className={css.block}>{user.name }</li>
            <li className={css.block}>{user.username }</li>
            <li className={css.block}>{user.email }</li>
            <li className={css.block}>{user.phone }</li>
        </ul>
    )
}