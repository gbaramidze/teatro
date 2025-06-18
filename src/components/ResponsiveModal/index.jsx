import { Modal } from 'react-bootstrap';
import "./styles.css"
const ResponsiveModal = ({ show, onHide, children, isMobile }) => {


  return (
    <Modal
      show={show}
      onHide={onHide}
      centered={!isMobile}
      dialogClassName={isMobile ? 'bottom-sheet-modal' : 'modal-lg modal-dialog-centered'}
      contentClassName={isMobile ? 'bottom-sheet-content' : ''}
    >
      {children}
    </Modal>
  );
};
export default ResponsiveModal;