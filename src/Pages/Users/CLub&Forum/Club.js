import React from 'react';
import ClubBanner from './Club/ClubBanner';
import ClubRegistration from './Club/ClubRegistration';
import ClubActivity from './Club/ClubActivity';
import ClubMembers from './Club/ClubMembers';
import ClubFAQ from './Club/ClubFAQ';

const Club = () => {
    return (
        <div>
            <ClubBanner />
            <ClubRegistration />
            <ClubActivity />
            <ClubMembers />
            <ClubFAQ/>

        </div>
    );
};

export default Club;