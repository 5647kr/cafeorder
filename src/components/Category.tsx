export default function Category({
  activeCategory,
  handleActiveCategory,
}: {
  activeCategory: string;
  handleActiveCategory: (value: string) => void;
}) {
  const categories = ["커피", "음료", "디저트"];
  return (
    <section className="bg-(--secondary) p-5">
      <ul className="flex items-center gap-5">
        {categories.map((category, index) => (
          <li key={index} className="w-full">
            <button
              type="button"
              onClick={() => handleActiveCategory(category)}
              className={`p-3 w-full text-lg font-bold ${activeCategory === category ? "bg-(--accent)" : " bg-(--bg)"}`}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
