import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'web-text',
  styleUrl: 'web-text.css',
  shadow: true,
})
export class WebText {
  @Prop() text: string;

  @Watch('text')
  handlerTextWatcher(val: string, oldVal: string) {
    console.log('新值：', val, '，旧值：', oldVal);
    console.log('生命周期：watch');
  }

  connectedCallback() {
    console.log('生命周期：connectedCallback');
  }

  componentWillLoad() {
    console.log('生命周期：componentWillLoad');
  }

  componentWillRender() {
    console.log('生命周期：componentWillRender');
  }

  render() {
    console.log('生命周期：render');
    return <Host>{this.text}</Host>;
  }

  componentDidRender() {
    console.log('生命周期：componentDidRender');
  }

  componentDidLoad() {
    console.log('生命周期：componentDidLoad');
  }

  componentShouldUpdate() {
    console.log('生命周期：componentShouldUpdate');
  }

  componentWillUpdate() {
    console.log('生命周期：componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('生命周期：componentDidUpdate');
  }

  disconnectedCallback() {
    console.log('生命周期：disconnectedCallback');
  }
}
