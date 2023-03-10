import { CustomInput, PrimaryButton, CustomForm } from "../../styled";

export default function ReserveSeatsForm({
  handleFormSubmit,
  valueCpf,
  valueName,
  onChangeName,
  onChangeCpf,
}) {
  function onSubmit(e) {
    e.preventDefault();
    handleFormSubmit();
  }

  return (
    <CustomForm onSubmit={onSubmit}>
      <label>
        Nome do comprador:
        <CustomInput
          placeholder="Digite seu nome..."
          name="name"
          type="text"
          data-test="client-name"
          value={valueName}
          onChange={(e) => onChangeName(e.target.value)}
        />
      </label>
      <label>
        CPF do comprador:
        <CustomInput
          placeholder="Digite seu CPF..."
          name="cpf"
          type="text"
          data-test="client-cpf"
          value={valueCpf}
          onChange={(e) => onChangeCpf(e.target.value)}
        />
      </label>
      <PrimaryButton data-test="book-seat-btn" type="submit">
        Reservar assento(s)
      </PrimaryButton>
    </CustomForm>
  );
}
