export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="w-full p-4 text-lg flex justify-between items-center bg-(--frame) text-(--bg)">
      {children}
    </header>
  );
}
