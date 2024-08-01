
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resDetail} = props;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + resDetail?.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{resDetail?.name}</h3>
            <h4 className="w-full break-words">{resDetail?.cuisines?.join(",")}</h4>
            <h4>{resDetail?.avgRating} stars</h4>
            <h4>{resDetail?.sla?.slaString}</h4>
            <h4>Rs {resDetail?.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;