import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <h1>Name:{name}</h1>
      <h1>location:{location}</h1>
      <h1>Contact:vipinsambhoriya@gmail.com</h1>
    </div>
  );
};
export default User;
