import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button/button';
import ConfigProvider from './config-provider';

const Test = () => {
    const [value, setValue] = useState(1);

    return (
        <ul style={{display: 'inline-block'}}>
            <li>
                <Button buttonType="primary" onClick={() => {setValue((val: any) => val + 1)}}>按钮{value}</Button>
            </li>
            <li></li>
            <li>
            <Button size="large">按钮</Button>
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
            <Button buttonType="danger">按钮</Button>
            </li>
        </ul>
    )
}

ReactDOM.render(
    <ConfigProvider>
        <Test/>
    </ConfigProvider>
    , document.body);
