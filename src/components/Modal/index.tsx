import { createPortal } from "react-dom";
import { Container } from "./styled";
import { ReactNode, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
}

export const Modal = ({ toggleModal, children, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleModal();
      }
    });
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          toggleModal();
        }
      });
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  const handleClose = () => {
    toggleModal();
  };

  return createPortal(
    <Container>
      <div ref={blockClosing ? null : ref}>
        {!blockClosing && (
          <button onClick={handleClose}>
            <MdClose />
          </button>
        )}
        {children}
      </div>
    </Container>,
    document.body
  );
};
