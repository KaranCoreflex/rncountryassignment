import { createAction } from "@reduxjs/toolkit";
import { DELETE_COUNTRY, EDITED_COUNTRY, LIST_COUNTRY, LIST_COUNTRY_NAME } from "../constants/constants";

export const listCountry = createAction(LIST_COUNTRY,() => {
    return {
        payload: 'List Category req'
    };
});

export const countryName = createAction(LIST_COUNTRY_NAME,(countryName, type) => {
    return {
        payload: {countryName:countryName, type:type}
    };
});

export const deleteCountry = createAction(DELETE_COUNTRY, (countryId) => {
    return {
      payload: { countryId },
    };
  });

export const editedCountry = createAction(EDITED_COUNTRY, (data) => ({
    payload: data,
}));