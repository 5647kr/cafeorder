import useCategoryStore from "../store/useCategoryStore";

export default function Category() {
  const category = useCategoryStore((state) => state.category);
  const handleCategory = useCategoryStore((state) => state.handleCategory);
  const categories = ["커피", "음료", "디저트"];
  return (
    <section className="bg-(--secondary) p-5">
      <ul className="flex items-center gap-5">
        {categories.map((cate, index) => (
          <li key={index} className="w-full">
            <button
              type="button"
              onClick={() => handleCategory(cate)}
              className={`p-3 w-full text-lg font-bold ${cate === category ? "bg-(--accent)" : " bg-(--bg)"}`}>
              {cate}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
