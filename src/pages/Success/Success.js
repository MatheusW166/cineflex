import { useLocation } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  console.log(state);

  return <>Success</>;
}
