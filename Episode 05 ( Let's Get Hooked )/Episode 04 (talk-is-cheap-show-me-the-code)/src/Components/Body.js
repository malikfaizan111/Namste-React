import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    // State Variable - Super powerful vairable

    // Normal JS Variable
    let listOfRestaurants = [
    {
        id:"3",
        resName: "KFC",
        cuisine: ["Burger","Biryani","American","Snacks","Fast Food"],
        costForTwo: 40000, deliveryTime: 36, avgRating:"3.8"
    },
    {
        id:"4",
        resName: "Dominos",
        cuisine: ["Burger","Biryani","American","Snacks","Fast Food"],
        costForTwo: 40000, deliveryTime: 36, avgRating:"4.5"
    },
    {
        id:"4",
        resName: "MCD",
        cuisine: ["Burger","Biryani","American","Snacks","Fast Food"],
        costForTwo: 40000, deliveryTime: 36, avgRating:"4.1"
    }
    ];
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onMouseOver={() =>  {restaurant = listOfRestaurants.filter((res) => res.avgRating > 4); console.log(restaurant)}}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant, index) => <RestaurantCard key={restaurant.id} resDetail={restaurant} />)
                    // key is mendatory to write
                    // never use index as key in looping (not Recommended) (use Unique id (best Practice))
                }
            </div>
        </div>
    )
}

export default Body;