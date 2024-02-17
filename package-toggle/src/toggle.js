import React, { useState } from "react";
import { ToggleButtonContainer, ToggleButtonSlider } from "./styles.toggle";

const ToggleButton = ({
  initialState = false,
  width = "3rem",
  height = "1.75rem",
  sliderRadius = "1.5rem",
  padding = "0.125rem",
  toggleInactiveColor = "rgb(253,69,72)",
  toggleActiveColor = "rgb(4,170,109)",
  sliderColor = "",
  onToggleClick = () => void 0,
  isToggleExternallyControlled = true,
}) => {
  const [isToggleActive, setIsToggleActive] = useState(initialState);

  const toggleClickHandler = (e) => {
    onToggleClick(!isToggleActive);
    if (!isToggleExternallyControlled) {
      setIsToggleActive(!isToggleActive);
    }
  };

  return (
    <ToggleButtonContainer
      width={width}
      height={height}
      padding={padding}
      isActive={isToggleActive}
      onClick={toggleClickHandler}
      toggleInactiveColor={toggleInactiveColor}
      toggleActiveColor={toggleActiveColor}
    >
      <ToggleButtonSlider
        padding={padding}
        translateLength={width}
        sliderRadius={sliderRadius}
        isActive={isToggleActive}
        backgroundColor={sliderColor}
      />
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
