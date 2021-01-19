/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { FC, useCallback } from 'react';
import useMemo from '../_util/hook/useMemo';


export interface ConfigConsumerProps {
    rootPrefixCls?: string;
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

interface ConfigProviderProps {
    prefixCls?: string;
    // children?: React.ReactNode;
}

interface ProviderChildrenProps extends ConfigProviderProps {
    parentContext: ConfigConsumerProps;
}

const defaultGetPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `unicorn-${suffixCls}` : 'unicorn'
}

const ConfigContext: React.Context<ConfigConsumerProps> = React.createContext({
    getPrefixCls: defaultGetPrefixCls
})

export const ConfigConsumer = ConfigContext.Consumer;

const ProviderChildren: React.FC<ProviderChildrenProps> = props => {
    const {
        children,
        parentContext
    } = props;

    const getPrefixCls = useCallback(
        (suffixCls: string, customizePrefixCls?: string) => {
            const { prefixCls } = props;
            if (customizePrefixCls) return customizePrefixCls;

            const mergedPrefixCls  = prefixCls || parentContext.getPrefixCls('');
    
            return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
        },
        [parentContext.getPrefixCls],
    )

    const getConfig = (): ConfigConsumerProps => {
        const _config = {
            ...parentContext,
            getPrefixCls
        }
        return _config;
    }

    const config = getConfig();

    const memoedConfig = useMemo(
        () => config,
        config,
        (prevConfig: Record<string, any>, currentConfig) => {
            const prevKeys = Object.keys(prevConfig);
            const currentKeys = Object.keys(currentConfig);
            return (
                prevKeys.length !== currentKeys.length ||
                prevKeys.some(key => prevConfig[key] !== currentConfig[key])
            )
        }
    )

    return (
        <ConfigContext.Provider value={memoedConfig!}>
            { children }
        </ConfigContext.Provider>
    )
}

const ConfigProvider: FC<ConfigProviderProps> = props => {

    // const renderProvider = 
    //     React.useCallback((context: ConfigConsumerProps) => {
    //         const { children } = props;

    //         console.log(children)

    //         const config = {
    //             ...context,
    //             getPrefixCls
    //         }

    //         return (
    //             <ConfigContext.Provider value={config}>
    //                 { children }
    //             </ConfigContext.Provider>
    //         )
    //     },
    //     [getPrefixCls, props],
    // )

    return (
        <ConfigConsumer>
            {context => <ProviderChildren parentContext={context} {...props} /> }
        </ConfigConsumer>
    )
}
// class ConfigProvider extends React.Component<ConfigProviderProps> {

//     getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
//         const { prefixCls = 'unicorn' } = this.props;

//         if (customizePrefixCls) return customizePrefixCls;

//         return suffixCls? `${prefixCls}-${suffixCls}` : prefixCls;
//     }

//     renderProvider = (context: ConfigConsumerProps) => {

//         const { children } = this.props;

//         const config = {
//             ...context,
//             getPrefixCls: this.getPrefixCls
//         }

//         return (
//             <ConfigContext.Provider value={config}>
//                 { children }
//             </ConfigContext.Provider>
//         )
//     }

//     render() {
//         return (
//             <ConfigConsumer>
//                 {this.renderProvider}
//             </ConfigConsumer>
//         )
//         // return this.renderProvider
//     }
// }

export default ConfigProvider