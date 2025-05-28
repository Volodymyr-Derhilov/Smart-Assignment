import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "./usersSlice";
import { selectFilters } from "../filters/filtersSelectors";

const selectUsers = (state: RootState): User[] => {
  return state.users.users;
};

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters],
  (users, { name, username, email, phone }) =>
    users.filter((user) => {
      const arrayByName =
        !name || user.name.toLowerCase().includes(name.toLowerCase());

      const arrayByUsername =
        !username ||
        user.username.toLowerCase().includes(username.toLowerCase());

      const arrayByEmail =
        !email || user.email.toLowerCase().includes(email.toLowerCase());

      const arrayByPhone =
        !phone || user.phone.toLowerCase().includes(phone.toLowerCase());

      return arrayByName && arrayByUsername && arrayByEmail && arrayByPhone;
    })
);
