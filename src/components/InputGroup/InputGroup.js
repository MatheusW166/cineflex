import { CustomInput } from "../../styled";

export default function InputGroup({
  name,
  placeholder,
  type,
  value,
  onChange,
  dataTest,
  title,
  ...props
}) {
  return (
    <label>
      {title}
      <CustomInput
        placeholder={placeholder}
        name={name}
        type={type}
        data-test={dataTest}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </label>
  );
}
