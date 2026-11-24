export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="w-full p-4 shadow-[inset_0_0_10px_red] text-lg flex justify-between items-center">
      {children}
    </header>
  );
}
