import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "../../interface";

export const BagIcon = ({ color, width, height }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 23" fill="none">
      <Path
        fillRule="evenodd"
        fill={color}
        d="M23.953 20.4658L22 2.09091C22 0.935682 21.105 0 20 0H12H4C2.895 0 2 0.935682 2 2.09091L0.0469999 20.4658C0.0179999 20.609 0 20.7565 0 20.9091C0 22.0643 0.895 23 2 23H12H22C23.105 23 24 22.0643 24 20.9091C24 20.7565 23.982 20.609 23.953 20.4658ZM17 5.13109V6.27273C17 9.15505 14.757 11.5 12 11.5C9.243 11.5 7 9.15505 7 6.27273V5.13109C6.419 4.91573 6 4.34073 6 3.65909C6 2.79345 6.672 2.09091 7.5 2.09091C8.328 2.09091 9 2.79345 9 3.65909V6.27273C9 8.00191 10.346 9.40909 12 9.40909C13.654 9.40909 15 8.00191 15 6.27273V3.65909C15 2.79345 15.672 2.09091 16.5 2.09091C17.328 2.09091 18 2.79345 18 3.65909C18 4.34073 17.581 4.91573 17 5.13109Z"
      />
    </Svg>
  );
};
