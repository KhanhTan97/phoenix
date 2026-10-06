const MenuItem = ({
  classes = "",
  labelText,
  onClick,
}: {
  classes?: string;
  labelText?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={`menu-item ${classes}`} onClick={onClick}>
      <span>{labelText}</span>

      <div className="state-layer"></div>
    </button>
  );
};

export default MenuItem;
