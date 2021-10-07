function Accordion({ id, title, children, open, disabled }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          disabled={disabled}
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          <strong>{title}</strong>
        </button>
      </h2>
      <div
        id={id}
        className={`accordion-collapse collapse ${open ? "show" : ""}`}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
