
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resDetail} = props;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + resDetail?.cloudinaryImageId}></img>
            <h3>{resDetail?.name}</h3>
            <h4>{resDetail?.cuisines?.join(",")}</h4>
            <h4>{resDetail?.avgRating} stars</h4>
            <h4>{resDetail?.sla?.slaString}</h4>
            <h4>Rs {resDetail?.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;