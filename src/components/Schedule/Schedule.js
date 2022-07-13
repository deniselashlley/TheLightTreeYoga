import React from "react";

import Content, { HTMLContent } from '../Content'
import "./styles.scss";

export const ScheduleTemplate = ({data}) => {
  const { 
    title, 
    classHeading,
    eventsHeading,
    scheduleSection,
  } = data;

  const BodyContent = HTMLContent || Content

  const getSectionId = title.replace(/''/g, '-');
  return (
    <section id={getSectionId.toLowerCase()} className="section-block section-block--schedule">
    <div className="container">
       <h2 className="section-title">{title}</h2>
       <div className="container-row">
         <div className="block">
           <h3>{classHeading}</h3>
           <iframe 
            title="yogoschedule"
            src={process.env.GATSBY_TEAMUP_API}
            frameBorder="0" 
            width="100%" 
            height="500"
            className="scheduleFrame"
          />
         </div>
        <div className="block">
          <h3>{eventsHeading}</h3>
          {
            scheduleSection.map(section => (
            <div key={section.title} className="block--events">
              <h4>{section.title}</h4>
              <BodyContent content={section.body} />
            </div>
            ))
          }
          </div>
     </div>
   </div>
   </section>
  );
};

const Schedule = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <ScheduleTemplate data={data} />;
};

export { Schedule };
