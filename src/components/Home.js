import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card col s12 blue-grey lighten-3 z-depth-3">
          <h2 className="dark">Welcome to Espresso.Log</h2>
          <p className="light larger">
            A better way to store and track your espresso recipes
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col s6">
          <div className="card light-blue accent-1 z-depth-2">
            <h4 className="dark">Why?</h4>
          </div>

          <p className="dark flow-text">
            Specialty coffee shops often collect data on their espresso recipes,
            but ultimately don't analyze or use that data in any useful way.
          </p>
        </div>

        <div className="col s6">
          <div className="card light-blue accent-1 z-depth-2">
            <h4 className="grey-text text-darken-4">How?</h4>
          </div>

          <p className="dark flow-text">
            This application makes it easier to use the data you collect by
            presenting it in a graphical way. Seeing your espresso recipes{" "}
            <strong>in a graph</strong> makes it easier to immediately identify
            when there are inconsistencies.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <div className="card light-blue accent-1 col s6 push-s3 z-depth-2">
            <h4>How to get started</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="col s6 push-s3">
            <ul className="collection">
              <li className="collection-item">Usage notes will go here</li>
              <li className="collection-item">
                Explanations of types of accounts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
