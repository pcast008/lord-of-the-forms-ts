export const TextInputWithoutLabel = ({
  inputProps,
}: {
  inputProps: React.ComponentProps<"input">;
}): JSX.Element => <input {...inputProps} />;
