import React from "react";
import "./styles.scss";

export const ServicesTemplate = ({
  data: {
    title,
    serviceList
  }}) => { 

    const getSectionId = title.replace(/''/g, '-');
  return (
    <section id={getSectionId.toLowerCase()} className="section-block section-block--services">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <div>
            <ul className="services-list">
            {serviceList.map(services => (
              <li key={services.title}>
                <img src={services.image} alt="" className="service-list-image" />
                <div className="service-text-overlay">
                  <p className="service-title">{services.title}</p>
                  <p>{services.description}</p>
                  { services.label !== '' && (
                    <a href={services.link}>{services.label}</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>
  );
};

const Services = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <ServicesTemplate data={data} />;
};

export { Services};
