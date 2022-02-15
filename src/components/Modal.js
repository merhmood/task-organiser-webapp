import usePortal from "./usePortal";

const Modal = (props) => {
  return usePortal("modal", props.children);
};

export default Modal;
