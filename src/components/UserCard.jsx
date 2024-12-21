import React from "react";

function UserCard({data}) {
  return (
    <div className="user-card">
      <img src={data.picture.large} alt="" srcset="" />
      <h3>{data.name.first}</h3>
      <p>{data.phone}</p>
      <p>{data.location.city}, {data.location.state}</p>
    </div>
  );
}

export default UserCard;
