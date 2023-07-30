import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userDetail: {
      results: [
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Helga",
            last: "Kistner",
          },
          location: {
            street: {
              number: 3108,
              name: "Dorfstraße",
            },
            city: "Zerbst/Anhalt",
            state: "Bayern",
            country: "Germany",
            postcode: 45799,
            coordinates: {
              latitude: "-51.0003",
              longitude: "65.3417",
            },
            timezone: {
              offset: "-3:00",
              description: "Brazil, Buenos Aires, Georgetown",
            },
          },
          email: "helga.kistner@example.com",
          phone: "0694-9506894",
          cell: "0172-8719837",
          picture: {
            large: "https://randomuser.me/api/portraits/women/20.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
          },
          nat: "DE",
        },
      ],
    },
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.pageNo = 0;
    },
  },
});

export const { getUserDetail } = usersSlice.actions;
export default usersSlice.reducer;
