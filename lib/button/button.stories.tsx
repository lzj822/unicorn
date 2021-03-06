import * as React from 'react';
import Button from './button';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

export default { title: 'Button' }

// addDecorator(withInfo)
addDecorator(storyFn => <div style={{ width: "50vw", display: "flex", justifyContent: "space-between" }}>{storyFn()}</div>)

export const button = () => (
    <>
        <Button>Button</Button>
        {/* 中文加空格的原因 */}
        <Button buttonType="primary">按 钮</Button> 
        <Button buttonType="primary" size="small">Button</Button>
        <Button buttonType="primary" size="large">Button</Button>
        <Button buttonType="primary">Button</Button>
        <Button buttonType="danger">Button</Button>
        <Button buttonType="link" href="#">link</Button>
    </>
)
