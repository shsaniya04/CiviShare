function RoleCard({
  icon,
  title,
  description,
  selected,
  onClick
}) {
  return (
    <button
      type="button"
      className={`role-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >

      <div className="role-icon">
        {icon}
      </div>

      <div className="role-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

      <div className="role-radio">
        {selected && <span></span>}
      </div>

    </button>
  );
}

export default RoleCard;