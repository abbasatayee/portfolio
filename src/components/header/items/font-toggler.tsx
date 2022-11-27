"use client";

export default function FontToggler() {
  return <FontTogglerItem value="S" onClick={() => {}} />;
}

interface FontTogglerItemProps {
  onClick: () => void;
  value: string;
}

function FontTogglerItem({ onClick, value }: FontTogglerItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 mr-4 transition border rounded-xl border-zinc-300 dark:border-zinc-600 hover:shadow dark:hover:shadow active:scale-105"
    >
      {value}
    </button>
  );
}
