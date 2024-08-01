import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    // State Variable - Super powerful vairable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // arr[0], arr[1]

    // use state variable at the Top;
    //  never use state Variable outside of fuctional component
    // never use inside if else  conditional statements or loops
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


        console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // Optional Chaining
        setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks Like your are offline!!!. Please Check your Internet Connection</h1>
    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=> { setsearchText(e.target.value)}}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() =>{
                        console.log(searchText);
                        const searchFiltered = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(searchFiltered);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                    console.log(filteredList);
                    setfilteredRestaurant(filteredList);
                }}>
                    Top Rated Resturants
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants?.map((restaurant, index) => <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resDetail={restaurant?.info} /></Link>)
                    // key is mendatory to write
                    // never use index as key in looping (not Recommended) (use Unique id (best Practice))
                    
                }
            </div>
        </div>
    )
}

export default Body;