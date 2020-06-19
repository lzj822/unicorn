import * as React from 'react';
import {render} from '@testing-library/react';
import Button  from '../button';

test("button test", () => {
    const { container } = render(<Button>button</Button>)
    expect(container).toHaveTextContent("button");
})