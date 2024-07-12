interface DefaultButtonProps {
  text: string;
  primary: boolean;
  onClick: () => void;
}

export default function DefaultButton({
  text,
  primary,
  onClick,
}: DefaultButtonProps) {
  const style = primary
    ? "border border-green-700 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
    : "border border-red-700 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700";
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
}
