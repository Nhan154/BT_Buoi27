const Modal = ({ content, setContent }) => {
  if (!content) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setContent(null)}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={content.image}
                  alt={content.name}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <p><strong>Description:</strong> {content.description}</p>
                <p><strong>Price:</strong> ${content.price}</p>
                <p><strong>Quantity:</strong> {content.quantity}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
