import * as React from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/index';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
    buttonType?: ButtonType;
    prefixCls?: string;
    className?: string;
}

export type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<any>

export type ButtonProps = Partial<NativeButtonProps>;

const Button:FC<ButtonProps> = props => {

    const renderButton = ({ getPrefixCls }: ConfigConsumerProps) => {
        const {
            prefixCls: customizePrefixCls,
            buttonType,
            className,
            children
        } = props;

        const prefixCls = getPrefixCls('btn', customizePrefixCls);

        const classes = classNames(prefixCls, className, {
            [`${prefixCls}-${buttonType}`]: buttonType
        })

        const buttonNode = (
            <button
                className={classes}    
            >
                {children}
            </button>
        )

        return buttonNode;
    }

    return (
        <ConfigConsumer>
            {renderButton}
        </ConfigConsumer>
    )
}

Button.defaultProps = {
}

export default Button;

