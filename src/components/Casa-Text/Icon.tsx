import { IconContainer, IconItem, IconImage, IconLabel } from "./casa-style";
import React from "react";

interface IconData {
  src: string;
  label: string;
}

interface IconProps {
  icons: IconData[];
}

const Icon: React.FC<IconProps> = ({ icons }) => {
  return (
    <IconContainer>
      {icons.map((icon, index) => (
        <IconItem key={index}>
          <IconImage src={icon.src} />
          <IconLabel>{icon.label}</IconLabel>
        </IconItem>
      ))}
    </IconContainer>
  );
};

export default Icon;