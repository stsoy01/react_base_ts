import { forwardRef } from "react";
import './dialog.css'

type Props = {
    children: React.ReactNode;
    toggleDialog: () => void;
    onSave: (event: any) => void
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
    ({ children, toggleDialog, onSave }, ref) => {
        return (
            <dialog
                ref={ref}>
                <div>
                    {children}
                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: '40px' }}>
                        <button
                            type='submit'
                            className="saveBtn"
                            onClick={onSave}
                        >{'Сохранить'}</button>

                        <button
                            className="closeBtn"
                            onClick={toggleDialog}
                        >{'Отмена'}</button>
                    </div>
                </div>
            </dialog>
        );
    }
);
export default Dialog;