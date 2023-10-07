import { Component } from "react";

export class ClassTextInput extends Component<{
  labelText: string;
  inputProps: React.ComponentProps<"input">;
}> {
  render() {
    const { labelText, inputProps } = this.props;

    return (
      <div className="input-wrap">
        <label htmlFor={inputProps.id}>{labelText}:</label>
        <input {...inputProps} />
      </div>
    );
  }
}
