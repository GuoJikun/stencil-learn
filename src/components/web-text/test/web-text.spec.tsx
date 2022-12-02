import { newSpecPage } from '@stencil/core/testing';
import { WebText } from '../web-text';

describe('web-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebText],
      html: `<web-text></web-text>`,
    });
    expect(page.root).toEqualHtml(`
      <web-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-text>
    `);
  });
});
