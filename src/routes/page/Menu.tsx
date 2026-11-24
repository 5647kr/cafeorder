import { CircleChevronLeft } from "lucide-react";
import { Link } from "react-router";
import Header from "../../components/Header";
import useOrderStore from "../../store/useOrderStore";

export default function Menu() {
  const order = useOrderStore((state) => state.order);

  console.log(order);
  return (
    <>
      <Header>
        <Link to="/" className="flex items-center gap-1">
          <CircleChevronLeft strokeWidth={1} />
          <span>처음으로</span>
        </Link>
      </Header>

      <h1>Menu Component</h1>
    </>
  );
}
