import React from "react";

const Register = ({ onTriggerRegisterDialog }) => {
  return (
    <div className="dialog">
      <button onClick={onTriggerRegisterDialog}>Close</button>
    </div>
  );
};

export default Register;
