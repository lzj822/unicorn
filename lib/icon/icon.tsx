import classNames from 'classnames';
import React, { FC } from 'react';
import '../../svg/cog-solid.svg';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    prefixCls?: string;
    className?: string;
}

export const Icon: FC<IconProps> = (props) => {


    const renderSVG = ({ getPrefixCls }: ConfigConsumerProps) =>{

        const { prefixCls: customizePrefixCls , name, className, ...rest } = props;

        const prefixCls = getPrefixCls('icon', customizePrefixCls);

        const classes = classNames(prefixCls, className);

        return (
            <svg className={classes} {...rest}>
                <use xlinkHref={`#${name}-solid`} fill="black"></use>
            </svg>
        )
    }

    return (
        <ConfigConsumer>
            {renderSVG}
        </ConfigConsumer>
    )

}