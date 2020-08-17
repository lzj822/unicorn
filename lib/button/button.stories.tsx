import * as React from 'react';
import Button from './button';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

export default { title: 'Button' }

// addDecorator(withInfo)
addDecorator(storyFn => <div style={{ width: "30vw", display: "flex", justifyContent: "space-between" }}>{storyFn()}</div>)

export const button = () => (
    <>
        <Button>Button</Button>
        <Button buttonType="primary" size="small">Button</Button>
        <Button buttonType="primary" size="large">Button</Button>
        <Button buttonType="primary">Button</Button>
        <Button buttonType="danger">Button</Button>
    </>
)
