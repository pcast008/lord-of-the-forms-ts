import { Component } from "react";
import { ClassTextInputWithoutLabel } from "./ClassTextInputWithoutLabel";

export class ClassPhoneInput extends Component<{
  phoneInputState: string[];
  createPhoneOnChangeHandler: (
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneRef0: React.RefObject<HTMLInputElement>;
  phoneRef1: React.RefObject<HTMLInputElement>;
  phoneRef2: React.RefObject<HTMLInputElement>;
  phoneRef3: React.RefObject<HTMLInputElement>;
}> {
  onKeyDown(e: React.KeyboardEvent) {
    if (isNaN(Number(e.key)) && e.key !== "Backspace") {
      e.preventDefault();
    }
  }

  render() {
    const {
      phoneInputState,
      createPhoneOnChangeHandler,
      phoneRef0,
      phoneRef1,
      phoneRef2,
      phoneRef3,
    } = this.props;

    return (
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <ClassTextInputWithoutLabel
            inputProps={{
              type: "text",
              id: "phone-input-1",
              placeholder: "55",
              value: phoneInputState[0],
              onChange: createPhoneOnChangeHandler(0),
              ref: phoneRef0,
              maxLength: 2,
              autoComplete: "off",
              onKeyDown: (e) => {
                this.onKeyDown(e);
              },
            }}
          />
          -
          <ClassTextInputWithoutLabel
            inputProps={{
              type: "text",
              id: "phone-input-2",
              placeholder: "55",
              value: phoneInputState[1],
              onChange: createPhoneOnChangeHandler(1),
              ref: phoneRef1,
              maxLength: 2,
              autoComplete: "off",
              onKeyDown: (e) => {
                this.onKeyDown(e);
              },
            }}
          />
          -
          <ClassTextInputWithoutLabel
            inputProps={{
              type: "text",
              id: "phone-input-3",
              placeholder: "55",
              value: phoneInputState[2],
              onChange: createPhoneOnChangeHandler(2),
              ref: phoneRef2,
              maxLength: 2,
              autoComplete: "off",
              onKeyDown: (e) => {
                this.onKeyDown(e);
              },
            }}
          />
          -
          <ClassTextInputWithoutLabel
            inputProps={{
              type: "text",
              id: "phone-input-4",
              placeholder: "5",
              value: phoneInputState[3],
              onChange: createPhoneOnChangeHandler(3),
              ref: phoneRef3,
              maxLength: 1,
              autoComplete: "off",
              onKeyDown: (e) => {
                this.onKeyDown(e);
              },
            }}
          />
        </div>
      </div>
    );
  }
}
