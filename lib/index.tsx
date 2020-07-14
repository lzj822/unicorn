import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button/button';

ReactDOM.render(<ul style={{display: 'inline-block'}}>
    <li>
    <Button buttonType="primary">按钮</Button>
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
    , document.body);
