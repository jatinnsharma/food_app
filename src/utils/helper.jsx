export function filterData(searchText, allrestaurants) {
    const filterData = allrestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

