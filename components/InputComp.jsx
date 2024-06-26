import React, { useId, forwardRef } from "react";
const InputComp = forwardRef(function InputComp(
  { type = "text", placeholder = "Enter text", label, className = "", ...props },
  ref
) {
  const inputId = useId();
  return(
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="inline-block mb-1 pl-1">
          {label}{" "}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default InputComp;
