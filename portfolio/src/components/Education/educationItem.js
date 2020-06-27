import React from 'react';

const EducationItem = ({ item }) => {
  return (
    <div>
      <h3 className="degree">{item.degree}</h3>
      <div className="education-body">
        {item.school}
      </div>

      <div className="time">{item.startYear} - {item.endYear}</div>
      <div className="desc">

      </div>
    </div>
  );
}

export default EducationItem;