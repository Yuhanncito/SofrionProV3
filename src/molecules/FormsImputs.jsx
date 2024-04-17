import React from "react";
import {
  Inpusts,
  Labels,
  Selects,
  Checkboxes,
  RadiosButtons,
} from "../atoms/FormularyItems";

export function FormsImputs({ type, label, text, onChange, id, options, validate, errors }) {
  
  return (
    <div className="w-full flex flex-col mt-2">
      <Labels text={label} to={id} />
      {type === "select" ? (
        <Selects id={id} text={text} onChange={onChange} options={options} validate={validate}  />
      ) : type === "checkbox" ? (
        <Checkboxes id={id} text={text}  />
      ) : type === "radiosButtons" ? (
        <RadiosButtons options={options} id={id} text={text}  />
      ) : (
        <Inpusts type={type} text={text} onChange={onChange} id={id} validate={validate} />
      )}
    </div>
  );
}
