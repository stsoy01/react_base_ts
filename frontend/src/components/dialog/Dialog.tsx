import { forwardRef } from "react";

type Props = {
    children: React.ReactNode;
    toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
    ({ children, toggleDialog }, ref) => {
        return (
            <dialog
                ref={ref}>
                <div>
                    {children}
                    <button onClick={toggleDialog}>Close</button>
                </div>
            </dialog>
        );
    }
);
export default Dialog;