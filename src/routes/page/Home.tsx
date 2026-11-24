import { ShoppingBag, Utensils } from "lucide-react";
import Header from "../../components/Header";
import { useNavigate } from "react-router";
import useOrderStore from "../../store/useOrderStore";

export default function Home() {
  const navigate = useNavigate();

  const handleOrder = useOrderStore((state) => state.handleOrder);

  const handleOrderType = (name: string, value: string) => {
    handleOrder(name, value);
    navigate("/menu");
  };
  return (
    <>
      <Header>
        <h1 className="font-bold">CafeOrder</h1>
      </Header>

      <main className="flex-1 py-10">
        {/* 주문 방법 */}
        <section className="text-center">
          <h2 className="text-4xl font-bold">주문 방법을 선택해주세요</h2>
          <p className="my-5">Please select your order type</p>

          <div className="flex gap-10">
            <button
              type="button"
              onClick={() => handleOrderType("orderType", "매장 식사")}
              className="bg-(--secondary) text-(--bg) flex-1 py-15">
              <Utensils className="mx-auto" size={100} strokeWidth={1} />
              <p className="text-lg my-5">Eat in</p>
              <h3 className="text-3xl font-bold">매장 식사</h3>
            </button>
            <button
              type="button"
              onClick={() => handleOrderType("orderType", "포장")}
              className="bg-(--secondary) text-(--bg) flex-1 py-15">
              <ShoppingBag className="mx-auto" size={100} strokeWidth={1} />
              <p className="text-lg my-5">Take out</p>
              <h3 className="text-3xl font-bold">포장</h3>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
