import { CircleChevronLeft } from "lucide-react";
import { Link } from "react-router";
import Header from "../../components/Header";

export default function Cart() {
  return (
    <>
      <Header>
        <Link to="/menu" className="flex items-center gap-1">
          <CircleChevronLeft strokeWidth={1} />
          <span>메뉴 더 담기</span>
        </Link>
        <p>장바구니</p>
      </Header>

      <h1>Cart Component</h1>
    </>
  );
}
