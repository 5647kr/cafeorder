import { CircleChevronLeft, Minus, Plus } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { fetchMenu, fetchOptions } from "../../api/fetchData";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState<Menu | null>(null);
  const [orderMenu, setOrderMenu] = useState<OrderMenu | null>(null);
  const [selectedOpt, setSelectedOpt] = useState<SelectedOpt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (!id) {
      toast.error("상품을 조회할 수 없습니다.");
      navigate("/menu");
      return;
    }

    const fetchData = async () => {
      try {
        const [menuData, optionsData] = await Promise.all([
          fetchMenu(id),
          fetchOptions(),
        ]);

        const optionData = optionsData.filter((opt) =>
          menuData.optionIds.includes(opt.id),
        );

        const selectOpt = optionData.map((opt) => ({
          id: opt.id,
          name: opt.name,
          price: [],
          value: [opt.default],
        }));

        const result = {
          ...menuData,
          options: optionData,
        };

        setMenu(result);
        setSelectedOpt(selectOpt);
      } catch {
        toast.error("상품을 찾을 수 없습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log(selectedOpt);

  const handleIncreaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecreaseAmount = () => {
    if (amount <= 1) return;

    setAmount((prev) => prev - 1);
  };

  const handleSelectOpt = (id: number, value: string, price: number) => {
    setSelectedOpt((prev) => {

    })
  };

  return (
    <>
      <Header>
        <Link to="/menu" className="flex items-center gap-1">
          <CircleChevronLeft strokeWidth={1} />
          <span>이전</span>
        </Link>
        <p>옵션 선택</p>
      </Header>

      <main>
        {isLoading || (!menu && <h1>로딩중...</h1>)}
        {/* 이미지 & 타이틀 & 설명 & 수량 & 가격 */}

        {!isLoading && menu && (
          <>
            <section>
              <img
                src={menu.iconImg}
                alt={menu.title}
                className="w-1/4 mx-auto"
              />
              <h2 className="text-xl font-bold mt-4">{menu.title}</h2>
              <p className="text-(--text-sub)">{menu.description}</p>

              <div className="flex justify-between items-center mt-4">
                {/* 가격 */}
                <strong className="text-2xl">
                  {menu.price.toLocaleString("ko-KR")}원
                </strong>

                {/* 수량 조절 버튼 */}
                <div className="rounded-md bg-(--bg-disabled) flex items-center p-2">
                  <button
                    type="button"
                    onClick={handleDecreaseAmount}
                    className="px-2">
                    <Minus strokeWidth={1} stroke="var(--text-sub)" />
                  </button>
                  <div className="flex justify-center items-center bg-(--bg) rounded-md py-2 w-15">
                    <p>{amount}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleIncreaseAmount}
                    className="px-2">
                    <Plus strokeWidth={1} stroke="var(--text-sub)" />
                  </button>
                </div>
              </div>
            </section>

            {/* 옵션 */}
            <section>
              {menu.options.map((option) => (
                <div
                  key={option.name}
                  className="border-b border-(--border) py-5">
                  <div className="flex flex-row-reverse justify-end items-center gap-5">
                    <span
                      className={`py-2 px-4 text-xs rounded-md ${option.require ? "text-(--bg) bg-(--accent-sub)" : "text-(--text-sub) bg-(--bg-disabled)"} `}>
                      {option.require ? "필수" : "선택"}
                    </span>
                    <h3 className="text-xl font-bold">{option.name}</h3>
                  </div>

                  <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 mt-5">
                    {option.labels.map((label, index) => (
                      <li key={label}>
                        <button
                          type="button"
                          className="border border-(--border) rounded-md w-full">
                          <p>{label}</p>
                          {option.prices && (
                            <span>+{option.prices?.[index]}</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </>
  );
}
