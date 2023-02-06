import { useState } from "react";

export default function useSelectDropdownOption({ setValue }) {
  const [selectedName, setSelectedName] = useState("");

  const handleSelectDropdownOption = (name, value) => {
    setSelectedName([...selectedName, { [name]: value }]);
    setValue(name, value);
  };

  return { selectedName, handleSelectDropdownOption };
}
