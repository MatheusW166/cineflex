import { PrimaryButton, CustomForm } from "../../styled";
import InputGroup from "../InputGroup";

export default function ReserveSeatsForm({
  handleFormSubmit,
  forms,
  onChangeCpf,
  onChangeName,
}) {
  function onSubmit(e) {
    e.preventDefault();
    handleFormSubmit();
  }

  return (
    <CustomForm onSubmit={onSubmit}>
      {Object.values(forms).map((form) => (
        <div key={form.seat.id}>
          <InputGroup
            title={`Nome do comprador ${form.seat.name}`}
            placeholder="Digite seu nome..."
            name="name"
            type="text"
            dataTest="client-name"
            value={form.name}
            onChange={(e) => onChangeName(e.target.value, form.seat.id)}
          />
          <InputGroup
            title={`CPF do comprador ${form.seat.name}`}
            placeholder="Digite seu CPF..."
            name="cpf"
            type="text"
            dataTest="client-cpf"
            value={form.cpf}
            onChange={(e) => onChangeCpf(e.target.value, form.seat.id)}
          />
        </div>
      ))}
      <PrimaryButton data-test="book-seat-btn" type="submit">
        Reservar assento(s)
      </PrimaryButton>
    </CustomForm>
  );
}
