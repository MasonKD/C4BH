import './Modal.css'

const Modal = ({title, message}) => {


  return (
    <div className="modal micromodal-slide" id="modal-1" aria-hidden="true">
      <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
        <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
          <header className="modal__header">
            <h2 className="modal__title" id="modal-1-title">
              {title}
            </h2>
            <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
          </header>
          <main className="modal__close" id="modal-1-content">
            {message}
          </main>
          <footer className="modal__footer">
            <button className="modal__btn" data-micromodal-close aria-label="Close this dialog window">
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;