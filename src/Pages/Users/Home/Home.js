import React from 'react';
import Banner from '../Banner/Banner';
import ClubForum from '../CLub&Forum/ClubForum';
import ClubCta from '../CLubCTP/ClubCta';
import FroumCta from '../CLubCTP/FroumCta';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Contact from './Contact';
import RecentEvent from './RecentEvent';

const Home = () => {
    return (
        <div>
            <Banner/>
            <UpcomingEvents />
            <ClubCta />
            <ClubForum />
            <FroumCta /> 
            <RecentEvent />
            <Contact />
        </div>
    );
};

export default Home;