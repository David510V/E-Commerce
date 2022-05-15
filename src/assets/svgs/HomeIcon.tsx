import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "../../interface";
export const HomeIcon = ({ color, width, height }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 26">
      <Path
        fillRule="evenodd"
        d="M12.2941 25V16.5294H17.9412V25H25V13.7059H29.2353L15.1176 1L1 13.7059H5.23529V25H12.2941Z"
        fill={color}
      />
    </Svg>
  );
};
