import React from "react";
import Card from "./Card";

const Listings = ({listings }) => {
  const getListings = () => {
    let listingsOnPage = [];
    let result = [];

    listings.map((listing) => {
      return listingsOnPage.push(
        <Card
          title={listing.title}
          address={listing.address}
          city={listing.city}
          sold_price={listing.sold_price}
          list_price={listing.list_price}
          home_type={listing.type}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          photo_main={listing.image}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div className="row">
          <div className="col-1-of-3">{listingsOnPage[i]}</div>

          <div className="col-1-of-3">
            {listingsOnPage[i + 1] ? listingsOnPage[i + 1] : null}
          </div>

          <div className="col-1-of-3">
            {listingsOnPage[i + 2] ? listingsOnPage[i + 2] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  return <div>{getListings()}</div>;
};
export default Listings;
