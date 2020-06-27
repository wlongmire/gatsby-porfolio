import React from 'react';

const SkillItem = ({ item }) => {
  return (
    <div className="item col-12 col-md-4">
      <div className="item-inner">
        <div className="chart-easy-pie text-center">
          <div className="chart-theme-1 chart" data-percent={item.mastery}><span>{item.mastery}</span>%</div>
        </div>
        <h4 className="skill-name">{item.skill}</h4>
        <div className="level">{item.skillLevel}, {item.yearsInUse} years</div>
        <div className="desc">{item.description}</div>
      </div>
    </div>
  );
}

export default SkillItem;