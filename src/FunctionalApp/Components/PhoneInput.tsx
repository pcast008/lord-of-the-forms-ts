import { TextInputWithoutLabel } from "./TextInputWithoutLabel";

export const PhoneInput = ({
  phoneInputState,
  createPhoneOnChangeHandler,
  phoneRef0,
  phoneRef1,
  phoneRef2,
  phoneRef3,
}: {
  phoneInputState: string[];
  createPhoneOnChangeHandler(
    index: number
  ): (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneRef0: React.RefObject<HTMLInputElement>;
  phoneRef1: React.RefObject<HTMLInputElement>;
  phoneRef2: React.RefObject<HTMLInputElement>;
  phoneRef3: React.RefObject<HTMLInputElement>;
}): JSX.Element => {
  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <TextInputWithoutLabel
          inputProps={{
            type: "text",
            id: "phone-input-1",
            placeholder: "55",
            value: phoneInputState[0],
            onChange: createPhoneOnChangeHandler(0),
            ref: phoneRef0,
            maxLength: 2,
            autoComplete: "off",
          }}
        />
        -
        <TextInputWithoutLabel
          inputProps={{
            type: "text",
            id: "phone-input-2",
            placeholder: "55",
            value: phoneInputState[1],
            onChange: createPhoneOnChangeHandler(1),
            ref: phoneRef1,
            maxLength: 2,
            autoComplete: "off",
          }}
        />
        -
        <TextInputWithoutLabel
          inputProps={{
            type: "text",
            id: "phone-input-3",
            placeholder: "55",
            value: phoneInputState[2],
            onChange: createPhoneOnChangeHandler(2),
            ref: phoneRef2,
            maxLength: 2,
            autoComplete: "off",
          }}
        />
        -
        <TextInputWithoutLabel
          inputProps={{
            type: "text",
            id: "phone-input-4",
            placeholder: "5",
            value: phoneInputState[3],
            onChange: createPhoneOnChangeHandler(3),
            ref: phoneRef3,
            maxLength: 1,
            autoComplete: "off",
          }}
        />
      </div>
    </div>
  );
};
