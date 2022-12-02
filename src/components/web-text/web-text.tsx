import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'web-text',
  styleUrl: 'web-text.css',
  shadow: true,
})
export class WebText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
