import { createReducer } from "@reduxjs/toolkit";
import { DELETE_COUNTRY, EDITED_COUNTRY, LIST_COUNTRY, LIST_COUNTRY_NAME, LIST_COUNTRY_NAME_SUCCESS, LIST_COUNTRY_SUCCESS } from "../constants/constants";

const initialState = {
    countrys:[], /* for colleciton of categories */
    country:[]
};

export const reducers = createReducer(initialState, (builder)=>{
    /* Initial call, there is nothing is state */
    builder.addCase(LIST_COUNTRY, (state,action)=>{
        state.countrys = [];
        state.country = [];
    }).addCase(LIST_COUNTRY_SUCCESS, (state, action) => {
        /* Add received category data in State */
        state.countrys = action.payload;
    }).addCase(LIST_COUNTRY_NAME_SUCCESS, (state,action) => {
        // console.log("reducers--->",state)r
        // console.log(" action.payload reucer--->", action.payload)
        // state.products.push()
        state.country = action.payload;
    }).addCase(DELETE_COUNTRY, (state, action) => {
        // Handle the DELETE_COUNTRY action
        // const { countryId } = action.payload;
        const updatedCountries = state.countrys.filter(
          (country) => country.cca3 !== action.payload.countryId
        );
        state.countrys = updatedCountries;
    }).addCase(EDITED_COUNTRY, (state, action) => {
        const editedCountry = action.payload;
        // Create a new array with the updated country
        state.countrys = state.countrys.map(country =>
          country.cca3 === editedCountry.cca3 ?
            editedCountry
            :
            country
        );
      })
});