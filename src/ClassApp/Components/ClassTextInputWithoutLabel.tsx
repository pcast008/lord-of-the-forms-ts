import { Component } from "react";

export class ClassTextInputWithoutLabel extends Component<{
  inputProps: React.ComponentProps<"input">;
}> {
  render() {
    return <input {...this.props.inputProps} />;
  }
}
