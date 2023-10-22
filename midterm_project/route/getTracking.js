import axios from "axios";
import lodash from "lodash";
import {info} from "../testData.js";

export const getTrackingNumber = (orderNumber)=> {

    const order = info.find((order) => 
        order.orderNumber === orderNumber
    );
    return order?.trackingNumer;
};


// In order to create a testing package in TrackingMore,
// we need to get results
export const getTrackingInfo = async (trackingNumber) => {
    const headers = {
        "Tracking-Api-Key": process.env.TRACKINGMORE_API_KEY,
    };
    const params = {
        "tracking_numbers": trackingNumber,
    };
    const url = `https://api.trackingmore.com/v4/trackings/get`;
    const trackingResponse = await axios.get(url, {
        headers,
        params
    });
    if (trackingResponse.status < 299) {
        // console.log(trackingResponse.data);
        const packageInfo = lodash.pick(trackingResponse.data.data[0], ["courier_code", "order_number", "tracking_number", "delivery_status", "origin_country", "customer_name", "title"]);

        return packageInfo;
    }
    else {
        return undefined;
    }
    
   
}