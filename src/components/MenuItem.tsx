const MenuItem = ({
  classes = "",
  labelText,
}: {
  classes?: string;
  labelText?: string;
}) => {
  return (
    <button className={`menu-item ${classes}`}>
      <span>{labelText}</span>

      <div className="state-layer"></div>
    </button>
  );
};

export default MenuItem;
