import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ExperienceItem = ({ item }) => {
  return (
    <div className="item">
      <div className="work-place">
        <h3 className="place">{item.workplace}</h3>
        <div className="location"><i className="fas fa-map-marker-alt mr-1"></i>{item.location}</div>
      </div>
      <div className="job-meta">
        <div className="title">{item.workTitle}</div>
        <div className="time">{`${item.startYear} - ${item.endYear}`}</div>
      </div>

      <div className="job-desc">
        {documentToReactComponents(item.description.json)}
      </div>
    </div>
  );
}

ExperienceItem.propType = {
  item: PropTypes.object
}

export default ExperienceItem;

