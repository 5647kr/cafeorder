import { CakeSlice, Coffee, CupSoda } from "lucide-react";
import useCategoryStore from "../store/useCategoryStore";

export function MenuItem({ menu }: { menu: Menus }) {
  return (
    <div className="border border-(--border)">
      {/* 이미지 */}
      <div className="p-12 flex items-center justify-center">
        <img src={menu.iconImg} alt={menu.title} />
      </div>

      {/* 기본 정보 */}
      <div className="text-center bg-(--btn-none) py-2">
        <h2>{menu.title}</h2>
        <strong>{menu.price.toLocaleString("ko-KR")}원</strong>
        <div />
      </div>
    </div>
  );
}

export function MenuSkeleton() {
  const category = useCategoryStore((state) => state.category);
  return (
    <div className="border border-(--border)">
      {/* 이미지 */}
      <div className="p-12 flex items-center justify-center">
        {category === "커피" && (
          <Coffee
            strokeWidth={1}
            size={50}
            stroke="var(--text-disabled)"
            className="mx-auto"
          />
        )}
        {category === "음료" && (
          <CupSoda
            strokeWidth={1}
            size={50}
            stroke="var(--text-disabled)"
            className="mx-auto"
          />
        )}
        {category === "디저트" && (
          <CakeSlice
            strokeWidth={1}
            size={50}
            stroke="var(--text-disabled)"
            className="mx-auto"
          />
        )}
      </div>

      {/* 기본 정보 */}
      <div className="text-center bg-(--btn-none) py-2">
        <div className="w-18 h-6 bg-(--text-disabled) mx-auto rounded-md animate-pulse" />
        <div className="w-16 h-5 bg-(--text-disabled) mx-auto mt-1 rounded-md animate-pulse" />
        <div />
      </div>
    </div>
  );
}

export function SelectMenu() {}
