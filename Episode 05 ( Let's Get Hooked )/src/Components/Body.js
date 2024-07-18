import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react"
const Body = () => {

    // State Variable - Super powerful vairable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    // arr[0], arr[1]
    
    // const [listOfRestaurants, setListOfRestaurant] = useState([{
    //     id: "3",
    //     resName: "KFC",
    //     cuisine: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
    //     costForTwo: 40000, deliveryTime: 36, avgRating: "3.8"
    // },
    // {
    //     id: "4",
    //     resName: "Dominos",
    //     cuisine: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
    //     costForTwo: 40000, deliveryTime: 36, avgRating: "4.5"
    // },
    // {
    //     id: "5",
    //     resName: "MCD",
    //     cuisine: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
    //     costForTwo: 40000, deliveryTime: 36, avgRating: "4.1"
    // }])

    // Normal JS Variable
    // let listOfDefaultRestaurants = [
    // {
    //     id:"3",
    //     resName: "KFC",
    //     cuisine: ["Burger","Biryani","American","Snacks","Fast Food"],
    //     costForTwo: 40000, deliveryTime: 36, avgRating:"3.8"
    // },
    // {
    //     id:"4",
    //     resName: "Dominos",
    //     cuisine: ["Burger","Biryani","American","Snacks","Fast Food"],
    //     costForTwo: 40000, deliveryTime: 36, avgRating:"4.5"
    // },
    // {
    //     id:"4",
    //     resName: "MCD",
    //     cuisine: ["Burger","Biryani","American","Snacks","Fast Food"],
    //     costForTwo: 40000, deliveryTime: 36, avgRating:"4.1"
    // }
    // ];
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                     const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
                     console.log(filteredList);
                     setListOfRestaurant(filteredList);
                }}>
                    Top Rated Resturants
                </button>
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