import React from "react";
import "./YourCustomComponent.scss";

export interface IYourCustomComponent {
  label: string;
}

const YourCustomComponent: React.FC<IYourCustomComponent> = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default YourCustomComponent;
