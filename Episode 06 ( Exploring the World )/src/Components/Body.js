import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
const Body = () => {

    // State Variable - Super powerful vairable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // arr[0], arr[1]

    const [filteredRestaurants, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState('');
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
        // json.data.cards[0].card.card.imageGridCards.info.map(item => {
        //     // Generate random values
        //     const randomRating = (Math.random() * (5 - 1) + 1).toFixed(1);
        //     const randomDeliveryTime = Math.floor(Math.random() * 10) + 1;
        //     item['avgRating'] = randomRating;
        //     item['deliveryTime'] = randomDeliveryTime;
        // })


        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // Optional Chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
    
    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> { setsearchText(e.target.value)}}/>
                    <button onClick={() =>{
                        console.log(searchText);
                        const searchFiltered = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(searchFiltered);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                    console.log(filteredList);
                    setfilteredRestaurant(filteredList);
                }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.map((restaurant, index) => <RestaurantCard key={restaurant?.info?.id} resDetail={restaurant?.info} />)
                    // key is mendatory to write
                    // never use index as key in looping (not Recommended) (use Unique id (best Practice))
                }
            </div>
        </div>
    )
}

export default Body;