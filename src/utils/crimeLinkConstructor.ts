import { locationDetailsTypes } from "./types/locationTypes";

function crimeLinkConstructor (location: locationDetailsTypes ) {
    // TODO: There's an issue with this link, it's returning an empty array.
    // I've temporarily hardcoded a date in it because that needs to be there,
    // and when the bug is fixed I can get a variable date in.

    //eslint-disable-next-line
    return `https://data.police.uk/api/crimes-at-location?date=2022-02&lat=${location.latitude}&lng=${location.longitude}`;
}

export default crimeLinkConstructor;