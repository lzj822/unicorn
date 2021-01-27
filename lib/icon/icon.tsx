import React, { FC } from 'react';
import '../../svg/cog-solid.svg';

export interface IconProps {
    name: string;
}

// console.log(A)

export const Icon: FC<IconProps> = (props) => {

    const { name } = props;

    return (
        <svg>
            <use xlinkHref={`#${name}-solid`} fill="black"></use>
        </svg>
    )

}