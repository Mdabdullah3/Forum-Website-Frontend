import React from 'react';

import Card from "../Card/Card";
import'./ClubBlogs.css'
const ClubBlogs = () => {
     const properties = [
       {
         decImg:
           "https://salessupportafrica.com/wp-content/uploads/2020/01/events-4.jpg",
         title: "Events - Sales Support Africa - Sales Support Africa",
         "title-code": "corporate",
         text: "For all professionals looking to boost their career or network with like-minded persons, attending the Sales Support Africa events should be key. These events include seminars and conferences on relevant industry topics in a relaxed and engaging environment.",
         date: "01-01-2022",
       },
       {
         decImg:
           "https://technofaq.org/wp-content/uploads/2020/07/corporate-events.jpg",
         title: "Corporate Event Trends for Memorable Business Branding",
         "title-code": "corporate",
         text: "Branding is at the core of almost every corporate event a company organizes. Be it a conference, lunch, sporting event, corporate meet, or even a simple employee engagement activity – every event has one goal, which is to promote a brand or the culture of a company.",
         date: "10-01-2022",
       },
       {
         decImg:
           "https://a3cubeeventsindia.com/assets/frontend/images/event-gallery/corporat-1.jpg",
         title: "Corporate Event : A3cube Events",
         "title-code": "corporate",
         text: "A fully serviced Corporate Event Planners with over the line experience and top notch luxury feels creating any kind of atmosphere or look you wish to design. Leave all your worries to us and concentrate on the business side of your event, where your actual focus should be",
         date: "15-01-2022",
       },
     ];
    return (
      <div>
        <section className="">
          <div className="">
            <div className="Appes ">
              <div className="propertiest grid grid-cols-1 lg:grid-cols-3 ">
                {properties.map((item) => (
                  <Card data={item} key={item.date} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ClubBlogs;