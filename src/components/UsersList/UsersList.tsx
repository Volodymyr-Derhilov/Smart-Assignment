import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectFilteredUsers } from "../../redux/users/selectors";
import UserItem from "../UserItem/UserItem";
import css from "./UsersList.module.css";

export default function UserList() {
  const dispatch = useAppDispatch();
  //   const users = useAppSelector((state) => state.users.users);

  const filteredUsers = useAppSelector(selectFilteredUsers);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter({ value: e.target.value, filter: e.target.name }));
  };

  return (
    <div className={css.container}>
      <div className={css.headerRow}>
        <div className={`${css.cell} ${css.cell_first}`}>
          <span className={css.span}>Name</span>
          <input
            type="text"
            name="Name"
            className={`${css.input} ${css.cell_first}`}
            placeholder="Search name…"
            onChange={onSearch}
          />
        </div>
        <div className={css.cell}>
          <span className={css.span}>Username</span>
          <input
            type="text"
            name="Username"
            className={css.input}
            placeholder="Search username…"
            onChange={onSearch}
          />
        </div>
        <div className={css.cell}>
          <span className={css.span}>Email</span>
          <input
            type="text"
            name="Email"
            className={css.input}
            placeholder="Search email…"
            onChange={onSearch}
          />
        </div>
        <div className={css.cell}>
          <span className={css.span}>Phone</span>
          <input
            type="text"
            name="Phone"
            className={css.input}
            placeholder="Search phone…"
            onChange={onSearch}
          />
        </div>
      </div>

      <ul className={css.users__table}>
        {filteredUsers.map((user) => (
          <li key={crypto.randomUUID()} className={css.table__item}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
