import * as React from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider/index';
import "./style/index";

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
const ButtonSizes = tuple('small', 'default', 'large');
export type ButtonType = typeof ButtonTypes[number];
export type ButtonSize = typeof ButtonSizes[number];

export interface BaseButtonProps {
    buttonType?: ButtonType;
    prefixCls?: string;
    className?: string;
    size?: ButtonSize;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = props => {

    const renderButton = ({ getPrefixCls }: ConfigConsumerProps) => {

        const {
            prefixCls: customizePrefixCls,
            buttonType,
            className,
            children,
            size,
            ...rest
        } = props;

        const prefixCls = getPrefixCls('btn', customizePrefixCls);
        

        let sizeCls = '';
        switch (size) {
            case 'large':
                sizeCls = 'lg';
                break;
            case 'small':
                sizeCls = 'sm';
                break;
            default:
                break;
        }

        const classes = classNames(prefixCls, className, {
            [`${prefixCls}-${buttonType}`]: buttonType,
            [`${prefixCls}-${sizeCls}`]: sizeCls
        })

        const linkButtonRest = rest as AnchorButtonProps;
        if (linkButtonRest.href !== undefined) {
            return (
                <a {...linkButtonRest} className={classes}>
                    {children}
                </a>
            )
        }

        const { ...otherProps } = rest as NativeButtonProps;
        const buttonNode = (
            <button
                className={classes}    
                {...otherProps}
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
    buttonType: 'default',
    size: 'default'
}

export default Button;

