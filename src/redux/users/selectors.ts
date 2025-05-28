import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "./usersSlice";
import { selectFilters } from "../filters/filtersSelectors";

const selectUsers = (state: RootState): User[] => {
  return state.users.users;
};

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters],
  (users, searched) => {
    const arrayByName = users.filter((user) =>
      user.name.toLowerCase().includes(searched.name.toLowerCase())
    );

    if (arrayByName.length > 0) return arrayByName;

    return users;
  }
);
