import React from "react";
import img from "../../../images/avatars/sumit.png";

const TeamMember = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Sumit Saha</p>
        </div>

        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Sadh Hasan</p>
        </div>

        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Akash Ahmed</p>
        </div>

        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Md Salahuddin</p>
        </div>

        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Riyadh Hassan</p>
        </div>

        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Ferdous Hassan</p>
        </div>

        <div className="checkbox-container">
          <img src={img} alt="#" className="team-avater" />
          <p className="label">Arif Almas</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
