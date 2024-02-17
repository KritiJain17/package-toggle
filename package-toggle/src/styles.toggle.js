import styled from "styled-components";
import Box from "./box.atom";

export const ToggleButtonContainer = styled(Box)`
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  border-radius: ${(props) => props?.height};
  display: flex;
  padding: ${(props) => props?.padding};
  cursor: pointer;
  background-color: ${(props) =>
    props?.isActive ? props?.toggleActiveColor : props?.toggleInactiveColor};
  align-items: center;
  transition: all 0.2s ease-in-out;
  position: relative;
`;

export const ToggleButtonSlider = styled(Box)`
  height: ${(props) => props?.sliderRadius};
  width: ${(props) => props?.sliderRadius};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: ${(props) =>
    props?.isActive
      ? `calc(${props?.translateLength} - ${props?.sliderRadius} - ${props?.padding})`
      : props?.padding};
  background-color: ${(props) => props?.backgroundColor || "#fff"};
`;
