import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
const Body = () => {

    // State Variable - Super powerful vairable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // arr[0], arr[1]

    useEffect(() => {
        console.log("useEffect Called");
        fetchData();
    }, []);

    console.log("Body Rendered"); 

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // Set random values in the JSON structure
        json.data.cards[0].card.card.imageGridCards.info.map(item => {
            // Generate random values
            const randomRating = (Math.random() * (5 - 1) + 1).toFixed(1);
            const randomDeliveryTime = Math.floor(Math.random() * 10) + 1;
            item['avgRating'] = randomRating;
            item['deliveryTime'] = randomDeliveryTime;
        })


        console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // Optional Chaining
        setListOfRestaurant(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
    
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
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