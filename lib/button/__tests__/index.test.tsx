import React from 'react';
import {render} from '@testing-library/react';
import Button, { ButtonProps }  from '../button';

const testProps: ButtonProps = {
    buttonType: 'primary',
    size: 'large'
}

test("test Button Compontent", () => {
    const { container } = render(<Button>button</Button>)
    expect(container).toHaveTextContent("button");
})

test("render Button Compontent based on different props", () => {
    const { container, getByText } = render(<Button {...testProps}>button</Button>);
    expect(container).toBeInTheDocument();
    expect(getByText('button')).toHaveClass("unicorn-btn-primary unicorn-btn-lg");
})