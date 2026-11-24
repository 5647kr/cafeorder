import { CircleChevronLeft } from "lucide-react";
import { Link } from "react-router";
import Header from "../../components/Header";

export default function Menu() {
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
