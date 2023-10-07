import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { UserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";

interface ClassAppState {
  userData: UserInformation | null;
}

export class ClassApp extends Component<ClassAppState> {
  state = {
    userData: null,
  };

  setUserData = (value: UserInformation) => {
    this.setState({
      userData: value,
    });
  };

  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state.userData} />
        <ClassForm setUserData={this.setUserData} />
      </>
    );
  }
}
