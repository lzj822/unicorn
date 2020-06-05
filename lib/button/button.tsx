import * as React from 'react';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { ConfigConsumer } from '../config-provider/index';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
    type?: ButtonType;
    children?: React.ReactNode;
}

const Button = (): JSX.Element => {
    return (
        <ConfigConsumer>
            {
                (context) => {
                    return <div>{context.getPrefixCls("btn")}</div>
                }
            }
        </ConfigConsumer>
    )
}

export default Button;

