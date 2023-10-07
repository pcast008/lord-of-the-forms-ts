import { allCities } from "./all-cities";

export function isEmailValid(emailAddress: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isCityValid(cityArg: string): boolean {
  return allCities.find((city) => city === cityArg) ? true : false;
}

export function isNameValid(name: string): boolean {
  return typeof name === "string" && name.length >= 2 ? true : false;
}

export function isPhoneValid(phone: string): boolean {
  return phone.match(/[0-9]{7}/) ? true : false;
}
