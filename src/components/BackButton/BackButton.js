import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Button } from "./styled";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button data-test="go-home-header-btn" onClick={() => navigate(-1)}>
      <IoMdArrowBack />
    </Button>
  );
}
