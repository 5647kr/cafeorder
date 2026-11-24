import { CircleChevronLeft } from "lucide-react";
import { Link } from "react-router";
import Header from "../../components/Header";

export default function Detail() {
  return (
    <>
      <Header>
        <Link to="/menu" className="flex items-center gap-1">
          <CircleChevronLeft strokeWidth={1} />
          <span>이전</span>
        </Link>
        <p>옵션 선택</p>
      </Header>

      <h1>Detail Component</h1>
    </>
  );
}
