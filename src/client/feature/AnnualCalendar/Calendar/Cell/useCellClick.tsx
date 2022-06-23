import { useState, useCallback } from "react";

const useCellClick = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsSelected(!isSelected);
  }, [isSelected]);

  return {
    isSelected,
    handleClick,
  };
};

export default useCellClick;
