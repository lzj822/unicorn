import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button/button';
import ConfigProvider from './config-provider';
// import { Icon } from './icon/icon';

const Test = () => {
    const [value, setValue] = useState(1);

    return (
        <ul style={{display: 'inline-block'}}>
            {/* <li><Icon name="cog" /></li> */}
            <li>
                <Button buttonType="primary" onClick={() => {setValue((val: any) => val + 1)}}>按钮{value}</Button>
            </li>
            <li>
                <Button buttonType="link">123456</Button>
            </li>
            <li>
                <Button buttonType="link" size="large">123456</Button>
            </li>
            <li>
                <Button buttonType="link" size="small">123456</Button>
            </li>
            <li>
                <Button buttonType="link">123456</Button>
            </li>
            <li>
                <Button buttonType="link" disabled>123456</Button>
            </li>
            <li>
            <Button size="large" disabled>按钮</Button>
            </li>
            <li></li>
            <li>
            <Button size="small">按钮</Button>
            </li>
            <li></li>
            <li>
            <Button size="default">按钮</Button>
            </li>
            <li>
            </li>
            <li>
            <Button buttonType="danger" disabled>按钮</Button>
            </li>
        </ul>
    )
}

ReactDOM.render(
    <ConfigProvider>
        <Test/>
    </ConfigProvider>
    , document.getElementById('root'));
