import * as React from 'react';
import LocaleProvider from '../locale-provider';
import Portal from '../portal';
import { Theme, ThemeProvider } from '../style';
export interface ProviderProps {
  locale?: any;
  theme?: Partial<Theme>;
}
export default class Provider extends React.Component<ProviderProps> {
  render() {
    return (
      <LocaleProvider locale={this.props.locale}>
        <ThemeProvider value={this.props.theme}>
          <Portal.Host>{this.props.children}</Portal.Host>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}