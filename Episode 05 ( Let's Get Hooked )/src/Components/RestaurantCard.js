
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resDetail} = props;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL}></img>
            <h3>{resDetail.resName}</h3>
            <h4>{resDetail.cuisine.join(",")}</h4>
            <h4>{resDetail.avgRating} stars</h4>
            <h4>{resDetail.deliveryTime} minutes</h4>
            <h4>Rs {resDetail.costForTwo / 100} For Two</h4>
        </div>
    )
}

export default RestaurantCard;