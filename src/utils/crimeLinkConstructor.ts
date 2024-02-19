import { locationDetailsTypes } from "./types/locationTypes";

function crimeLinkConstructor (location: locationDetailsTypes ) {
    //eslint-disable-next-line
    return `https://data.police.uk/api/crimes-at-location?lat=${location.latitude}&lng=${location.longitude}`;
}

export default crimeLinkConstructor;