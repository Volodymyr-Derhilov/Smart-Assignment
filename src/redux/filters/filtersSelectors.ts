import { RootState } from "../store"
import { FiltersState } from "./filtersSlice"

export const selectFilters = (state: RootState): FiltersState => {
    return state.filters;
}