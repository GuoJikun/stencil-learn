import { newE2EPage } from '@stencil/core/testing';

describe('web-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-text></web-text>');

    const element = await page.find('web-text');
    expect(element).toHaveClass('hydrated');
  });
});
