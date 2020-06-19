import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button/button';

ReactDOM.render(<div>
    <Button>按钮</Button>
    <Button size="large">按钮</Button>
    <Button size="small">按钮</Button>
    <Button size="default">按钮</Button>
    </div>
    , document.body);