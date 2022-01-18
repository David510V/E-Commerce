import React from 'react';
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  color: string;
  width: number;
  height: number;
}

export const ProfileIcon = ({
  color,
  width,
  height,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 24" fill="none">
    <Path fillRule="evenodd" fill={color} d="M10.1408 0C12.9465 0 15.2113 2.26479 15.2113 5.07042C15.2113 7.87606 12.9465 10.1408 10.1408 10.1408C7.3352 10.1408 5.07041 7.87606 5.07041 5.07042C5.07041 2.26479 7.3352 0 10.1408 0ZM10.1408 24C6.06212 24 2.25463 21.9566 0 18.5577C0.0507042 15.1943 6.76056 13.3521 10.1408 13.3521C13.5042 13.3521 20.231 15.1943 20.2817 18.5577C18.0271 21.9566 14.2196 24 10.1408 24Z"/>
    </Svg>

  );
};
