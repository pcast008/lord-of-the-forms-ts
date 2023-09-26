import { useState, useRef } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TextInput } from "./Components/TextInput";
import { UserInformation } from "../types";
import { PhoneInput } from "./Components/PhoneInput";
import { allCities } from "../utils/all-cities";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  setUserData,
}: {
  setUserData(userData: UserInformation | null): void;
}): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState(["", "", "", ""]);

  const resetForm = (): void => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
    setPhone(["", "", "", ""]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData({
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone.join(""),
      city: city,
    });
    resetForm();
  };

  const phoneRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const phoneRef0 = phoneRefs[0];
  const phoneRef1 = phoneRefs[1];
  const phoneRef2 = phoneRefs[2];
  const phoneRef3 = phoneRefs[3];

  const createPhoneOnChangeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = phoneRefs[index + 1];
      const prevRef = phoneRefs[index - 1];
      const value = e.target.value;

      const shouldGoToNextRef =
        currentMaxLength === value.length && nextRef?.current;

      const shouldGoToPrevRef = value.length === 0 && prevRef?.current;

      const newPhoneState: string[] = phone.map(
        (phoneInput: string, phoneInputIndex: number) => {
          return index === phoneInputIndex ? e.target.value : phoneInput;
        }
      );

      if (shouldGoToNextRef) {
        nextRef.current?.focus();
      }

      if (shouldGoToPrevRef) {
        prevRef.current?.focus();
      }

      setPhone(newPhoneState);
    };

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>
      <TextInput
        labelText="First Name"
        inputProps={{
          placeholder: "Bilbo",
          id: "fName",
          autoComplete: "off",
          value: firstName,
          onChange: (e) => {
            setFirstName(e.target.value);
          },
        }}
      />
      <ErrorMessage message={firstNameErrorMessage} show={false} />

      <TextInput
        labelText="Last Name"
        inputProps={{
          placeholder: "Baggins",
          id: "lName",
          autoComplete: "off",
          value: lastName,
          onChange: (e) => {
            setLastName(e.target.value);
          },
        }}
      />
      <ErrorMessage message={lastNameErrorMessage} show={false} />

      <TextInput
        labelText="Email"
        inputProps={{
          placeholder: "bilbo-baggins@adventurehobbits.net",
          id: "email",
          autoComplete: "off",
          value: email,
          onChange: (e) => {
            setEmail(e.target.value);
          },
        }}
      />
      <ErrorMessage message={emailErrorMessage} show={false} />

      <TextInput
        labelText="City"
        inputProps={{
          placeholder: "Hobbiton",
          id: "city",
          autoComplete: "off",
          value: city,
          onChange: (e) => {
            setCity(e.target.value);
          },
          list: "cities",
        }}
      />

      <datalist id="cities">
        {allCities.map((city) => {
          return <option value={city}></option>;
        })}
      </datalist>

      <ErrorMessage message={cityErrorMessage} show={false} />

      <PhoneInput
        phoneInputState={phone}
        createPhoneOnChangeHandler={createPhoneOnChangeHandler}
        phoneRef0={phoneRef0}
        phoneRef1={phoneRef1}
        phoneRef2={phoneRef2}
        phoneRef3={phoneRef3}
      />
      <ErrorMessage message={phoneNumberErrorMessage} show={false} />

      <input type="submit" value="Submit" />
    </form>
  );
};
