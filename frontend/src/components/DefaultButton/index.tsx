interface DefaultButtonProps {
  text: string;
  primary: boolean;
  onClick: () => void;
  icon?: string;
}

export default function DefaultButton({
  text,
  primary,
  onClick,
  icon,
}: DefaultButtonProps) {
  const style = primary
    ? "flex border border-green-700 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
    : "flex border border-red-700 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700";
  return (
    <>
      {icon ? (
        <button className={style} onClick={onClick}>
          <img src={icon} alt="" className="w-6 h-6 bg-cover mr-2" />
          {text}
        </button>
      ) : (
        <button className={style} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
}
