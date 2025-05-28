import { useAppSelector } from "../../hooks"
import UserItem from "../UserItem/UserItem"
import css from "./UsersList.module.css"

export default function UserList() {
    const users = useAppSelector(state => state.users.users)
    

    return (
        <div className={css.container}>
            <div className={css.headerRow}>
                <div className={`${css.cell} ${css.cell_first}` }>Name</div>
                <div className={css.cell}>Username</div>
                <div className={css.cell}>Email</div>
                <div className={css.cell}>Phone</div>
            </div>
            <ul className={css.users__table}>
                {
                users.map(user => (
                    <li key={crypto.randomUUID()} className={css.table__item}>
                        <UserItem user={ user} />
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}