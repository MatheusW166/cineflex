import { PrimaryButton, CustomForm } from "../../styled";
import InputGroup from "../InputGroup";

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
      <InputGroup
        title="Nome do comprador: "
        placeholder="Digite seu nome..."
        name="name"
        type="text"
        dataTest="client-name"
        value={valueName}
        onChange={onChangeName}
      />
      <InputGroup
        title="CPF do comprador:"
        placeholder="Digite seu CPF..."
        name="cpf"
        type="text"
        dataTest="client-cpf"
        value={valueCpf}
        onChange={onChangeCpf}
      />
      <PrimaryButton data-test="book-seat-btn" type="submit">
        Reservar assento(s)
      </PrimaryButton>
    </CustomForm>
  );
}
