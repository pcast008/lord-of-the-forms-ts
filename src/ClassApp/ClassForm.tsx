import { Component, createRef } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassTextInput } from "./Components/ClassTextInput";
import { allCities } from "../utils/all-cities";
import {
  isEmailValid,
  isNameValid,
  isPhoneValid,
  isCityValid,
} from "../utils/validations";
import { ClassPhoneInput } from "./Components/ClassPhoneInput";
import { UserInformation } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

interface State {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string[];
  isSubmitted: boolean;
}

interface ClassFormProps {
  setUserData(userData: UserInformation | null): void;
}

export class ClassForm extends Component<ClassFormProps, State> {
  phoneRefs = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];

  phoneRef0 = this.phoneRefs[0];
  phoneRef1 = this.phoneRefs[1];
  phoneRef2 = this.phoneRefs[2];
  phoneRef3 = this.phoneRefs[3];

  state = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: ["", "", "", ""],
    isSubmitted: false,
  };

  resetForm = (): void => {
    this.setState({
      ...this.state,
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phone: ["", "", "", ""],
      isSubmitted: false,
    });
  };

  isFormCorrect = () => {
    return (
      isEmailValid(this.state.email) &&
      isPhoneValid(this.state.phone.join("")) &&
      isCityValid(this.state.city) &&
      isNameValid(this.state.firstName) &&
      isNameValid(this.state.lastName)
    );
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (this.isFormCorrect()) {
      this.props.setUserData({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone.join(""),
        city: this.state.city,
      });
      this.resetForm();
    } else {
      alert("bad data input");
      this.setState({ ...this.state, isSubmitted: true });
    }
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    this.setState({ ...this.state, [id]: value });
  };

  createPhoneOnChangeHandler = (
    index: number
  ): ((e: React.ChangeEvent<HTMLInputElement>) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = this.phoneRefs[index + 1];
      const prevRef = this.phoneRefs[index - 1];
      const value = e.target.value;

      const shouldGoToNextRef =
        currentMaxLength === value.length && nextRef?.current;

      const shouldGoToPrevRef = value.length === 0 && prevRef?.current;

      const newPhoneState: string[] = this.state.phone.map(
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

      this.setState({ ...this.state, phone: newPhoneState });
    };
  };

  render() {
    const { firstName, lastName, email, city, phone, isSubmitted } = this.state;

    return (
      <form
        onSubmit={(e) => {
          this.onSubmit(e);
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        <ClassTextInput
          labelText="First Name"
          inputProps={{
            placeholder: "Bilbo",
            id: "firstName",
            autoComplete: "off",
            value: firstName,
            onChange: (e) => {
              this.onChangeHandler(e);
            },
          }}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={!isNameValid(firstName) && isSubmitted}
        />

        <ClassTextInput
          labelText="Last Name"
          inputProps={{
            placeholder: "Baggins",
            id: "lastName",
            autoComplete: "off",
            value: lastName,
            onChange: (e) => {
              this.onChangeHandler(e);
            },
          }}
        />
        <ErrorMessage
          message={lastNameErrorMessage}
          show={!isNameValid(lastName) && isSubmitted}
        />

        <ClassTextInput
          labelText="Email"
          inputProps={{
            placeholder: "bilbo-baggins@adventurehobbits.net",
            id: "email",
            autoComplete: "off",
            value: email,
            onChange: (e) => {
              this.onChangeHandler(e);
            },
          }}
        />
        <ErrorMessage
          message={emailErrorMessage}
          show={!isEmailValid(email) && isSubmitted}
        />

        <ClassTextInput
          labelText="City"
          inputProps={{
            placeholder: "Hobbiton",
            id: "city",
            autoComplete: "off",
            value: city,
            onChange: (e) => {
              this.onChangeHandler(e);
            },
            list: "cities",
          }}
        />
        <ErrorMessage
          message={cityErrorMessage}
          show={!isCityValid(city) && isSubmitted}
        />

        <datalist id="cities">
          {allCities.map((city) => {
            return <option key={city} value={city}></option>;
          })}
        </datalist>

        <ClassPhoneInput
          phoneInputState={phone}
          createPhoneOnChangeHandler={this.createPhoneOnChangeHandler}
          phoneRef0={this.phoneRef0}
          phoneRef1={this.phoneRef1}
          phoneRef2={this.phoneRef2}
          phoneRef3={this.phoneRef3}
        />
        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={!isPhoneValid(phone.join("")) && isSubmitted}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
