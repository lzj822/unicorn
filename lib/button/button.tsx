import * as React from 'react';
import classNames from 'classnames';
import { tuple } from '../_util/type';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
    type?: ButtonType;
    children?: React.ReactNode;
}

const Button = (): JSX.Element => {
    return (
        <div>Button2</div>
    )
}

export default Button;

