import React, { ReactNode } from "react";
import "./BottomSheet.scss";
interface BottomSheetProps {
  children: ReactNode;
  theme: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children, theme, show, setShow }) => {
  return (
    <div
      className={`bottom-sheet__wrapper ${
        show ? "bottom-sheet--hide" : "bottom-sheet--show"
      }`}
      onClick={() => setShow(false)}
    >
      <div
        className={`bottom-sheet ${
          theme == "dark" ? "bottom-sheet--dark" : "bottom-sheet--light"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
