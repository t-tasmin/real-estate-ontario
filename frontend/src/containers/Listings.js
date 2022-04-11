import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Card from "../components/Card";


const Listings = () => {
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/listings?page=${page}&limit=8`
        );
        console.log('Data',res.data);
        setListings(res.data.results);
        setCount(res.data.count);
      } catch (err) {}
    };

    fetchData();
  }, [page]);

  const displayListings = () => {
    let display = [];
    let result = [];

    listings.map((listing) => {
      return display.push(
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
        <div key={i} className="row">
          <div className="col-1-of-3">{display[i]}</div>

          <div className="col-1-of-3">
            {display[i + 1] ? display[i + 1] : null}
          </div>

          <div className="col-1-of-3">
            {display[i + 2] ? display[i + 2] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  
  const previous_number = () => {
    console.log('Previous pressed');
    setPage(page-1);
    
  };

  const next_number = () => {
    console.log('Next pressed');
    console.log(page);
    setPage(page+1);
  };

  return (
    <main className="listings">
      <Helmet>
        <title> Realest Estate - Listings</title>
        <meta name="description" content="listings page" />
      </Helmet>
      <section className="listings__listings">{displayListings()}</section>
      <section className="listings__pagination">
        <div className="row">
        <div onClick={previous_number}> Previous Page </div>
            <div onClick={next_number}> Next Page </div> 
        </div>
      </section>
    </main>
  );
};
export default Listings;
