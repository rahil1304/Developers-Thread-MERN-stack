import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    //user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img
        src='data:image/jpeg;base64,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'
        className='round-img'
        alt=''
      />
      <div>
        <h2>Rahil</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link
          to={`/profile/5e9c49f0fa0d5e4228cf3afa`}
          className='btn btn-primary'
        >
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
