export default function Button({ children, onClick }: { children: string; onClick?: () => void }) {
  return (
    <button className="px-5 py-2.5 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600" onClick={onClick}>
      {children}
    </button>
  );
}
