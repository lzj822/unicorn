import * as React from 'react';

export interface ConfigConsumerProps {
    rootPrefixCls?: string;
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

interface ConfigProviderProps {
    prefixCls?: string;
    children?: React.ReactNode;
}

const ConfigContext: React.Context<ConfigConsumerProps | null> = React.createContext({
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
        if (customizePrefixCls) return customizePrefixCls;

        return `unicorn-${suffixCls}`
    }
})

export const ConfigConsumer = ConfigContext.Consumer;

class ConfigProvider extends React.Component<ConfigProviderProps> {

    getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
        const { prefixCls = 'unicorn' } = this.props;

        if (customizePrefixCls) return customizePrefixCls;

        return suffixCls? `${prefixCls}-${suffixCls}` : prefixCls;
    }

    renderProvider = (context: ConfigConsumerProps) => {
        const { children } = this.props;

        const config = {
            ...context,
            getPrefixCls: this.getPrefixCls
        }

        return (
            <ConfigContext.Provider value={config}>
                { children }
            </ConfigContext.Provider>
        )
    }

    render() {
        return (
            <ConfigConsumer>
                {this.renderProvider}
            </ConfigConsumer>
        )
    }
}

export default ConfigProvider