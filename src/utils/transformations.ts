export const capitalize = (name: string): string => {
  if (name === "") {
    return "";
  } else {
    name.toLowerCase();
    return name[0].toUpperCase() + name.slice(1);
  }
};

export const formatPhone = (phone: string): string =>
  phone === ""
    ? ""
    : `${phone.slice(0, 2)}
    -${phone.slice(2, 4)}
    -${phone.slice(4, 6)}
    -${phone.slice(6)}`;
