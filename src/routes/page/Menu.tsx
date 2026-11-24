import { CircleChevronLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import Header from "../../components/Header";
import Category from "../../components/Category";
import { useEffect, useState } from "react";
import { fetchMenus } from "../../api/fetchData";
import { MenuItem, MenuSkeleton } from "../../components/MenuItem";
import useOrderStore from "../../store/useOrderStore";
import { toast } from "sonner";

export default function Menu() {
  const [menus, setMenus] = useState<Menus[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [activeCategory, setActiveCategory] = useState("커피");
  const order = useOrderStore((state) => state.order);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMenus();
        setMenus(data);
      } catch (error) {
        setErrorMsg("메뉴를 불러오지 못했습니다.");
        toast.error(errorMsg);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [errorMsg]);

  const handleActiveCategory = (value: string) => {
    setActiveCategory(value);
  };

  const filteredMenus = menus.filter(
    (menu) => menu.category === activeCategory,
  );

  return (
    <>
      <Header>
        <Link to="/" className="flex items-center gap-1">
          <CircleChevronLeft strokeWidth={1} />
          <span>처음으로</span>
        </Link>
      </Header>

      <main className="relative">
        {/* 커피, 음료, 디저트 카테고리 */}
        <Category
          activeCategory={activeCategory}
          handleActiveCategory={handleActiveCategory}
        />

        {/* 제품 목록 */}
        <section className="p-5">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {isLoading && (
              <>
                {Array.from({ length: 10 }).map((_, index) => (
                  <li key={index}>
                    <MenuSkeleton activeCategory={activeCategory} />
                  </li>
                ))}
              </>
            )}

            {!isLoading && (
              <>
                {filteredMenus.map((menu) => (
                  <li>
                    <Link to={`/detail/${menu.id}`}>
                      <MenuItem menu={menu} />
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </section>

        {/* 선택한 제품 */}
        <section className="sticky left-0 bottom-0 p-5 bg-(--secondary) text-(--bg) flex flex-col justify-center items-center">
          {/* 선택한 메뉴가 없을 때 */}
          {order.orderMenu.length === 0 && (
            <>
              <ShoppingCart
                size={50}
                strokeWidth={1}
                stroke="var(--text-disabled)"
              />
              <h3 className="text-lg font-bold mt-2 mb-4">
                선택한 메뉴가 없습니다.
              </h3>
              <p className="text-(--text-disabled)">
                원하는 메뉴를 눌러 담아보세요.
              </p>
            </>
          )}

          {/* 선택한 메뉴가 있을 때 */}
          {order.orderMenu.length > 0 && (
            <ul>
              {order.orderMenu.map((menu) => (
                <li key={menu.id}></li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
