import * as React from "react";
import { inject, injectable } from "inversify";
import { connect } from "react-inversify";
import { IProvider } from "./providers";

type Props = {
  nameProvider: IProvider<string>;
};

@injectable()
class Dependencies {
  constructor(
    @inject("nameProvider") public readonly nameProvider: IProvider<string>
  ) {}
}

@connect(
  Dependencies,
  deps => ({
    nameProvider: deps.nameProvider
  })
)
export class Hello extends React.Component<Props> {
  render() {
    return <h1>Hello {this.props.nameProvider.provide()}!</h1>;
  }
}
