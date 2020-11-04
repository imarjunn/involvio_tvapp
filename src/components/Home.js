import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div className="home-container">
            <br/><br />
            <h1 className="headerr">Brief Overview:</h1>
            <br />
            <p>• Two Components are present majorly ShowList and Favourites. </p>
            <p>• Shows Schedule data is fetched in App component from the api Tvmaze.</p>
            <p>• Contents from the data fetched is dynamically rendered in the ShowList components having a callback function passed to it as props from Parent. </p>
            <p>• Callback function brings the index of the show clicked for favourites which then helps to send array of data to Favourites components of select shows.  </p>
            <p>• Handling of duplicate selection of Favourite show is done in App component so the show doesnt repeat itself in Favourite Component.  </p>
            <p>• Rating colour is dynamically allocated with values coming from the api.</p>
        </div>
    )
}

export default Home;