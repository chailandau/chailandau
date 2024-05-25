import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import type { ReactElement } from 'react';

/**
 * Tests that a React component matches the snapshot and does not have any accessibility violations.
 *
 * @param component - The React component to test.
 * ```
    testAxeAndSnapshot(<TestComponent />);
 * ```
 */
export const testAxeAndSnapshot = (component: ReactElement) => {
  it('matches snapshot', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
  it('does not have axe violations', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(component);
    expect(await axe(container)).toHaveNoViolations();
  });
};
