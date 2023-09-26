export const TextInput = ({
  labelText,
  inputProps,
}: {
  labelText: string;
  inputProps: React.ComponentProps<"input">;
}): JSX.Element => (
  <div className="input-wrap">
    <label htmlFor={inputProps.id}>{labelText}:</label>
    <input {...inputProps} />
  </div>
);
