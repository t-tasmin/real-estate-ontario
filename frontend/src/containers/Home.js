import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";


const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  
  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get("api/realtors/");
        setRealtors(res.data);
      } catch (err) {}
    };
    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img className="about__display__realtor_image" src={realtor.image} alt="" />
          </div>
          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.phone}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>
          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }

    return results;
  };

  
  return (
    <main className="about">
      <Helmet>
        <title> Realtor - About</title>
        <meta name="description" content="About us" />
      </Helmet>
      <header className="about__header">
         <div className="about__display">
           <img className="about__display__image" src='/images/house.jpg' alt="" />
          </div>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the perfect home for you
            </h2>
            <p className="about__paragraph">
              This app will provide list of all houses currently sold as well as
              to estimate home value for all available listings in the GTA.
              Buyers can also obtain an estimated home valuation using machine learning
              and identify similar nearby sold listings, to help when determining
              their final offer price!

            </p>
          </div>
        </div>
      </section>

      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet our Awesome Team</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};
export default About;
