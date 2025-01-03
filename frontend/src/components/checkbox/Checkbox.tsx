import './checkbox.css'
import taskService from '../../shared/services/tasks.service'
import { useState } from 'react'

export default function Checkbox({ checkedTask, onChecked }: any) {
    const [isChecked, setIsChecked] = useState(checkedTask.status)

    function changeChekedValue(event: any): void {
        setIsChecked(event.target.checked ? 'done' : 'undone')
        console.log(isChecked)

      setTimeout(() => {
        taskService(checkedTask).editTaskById(event?.target?.checked);
        onChecked();
      }, 380)
    }

    return (
        <>
            <form>
                <div className="checkbox">
                    <input
                        checked={isChecked === 'done'}
                        className="checkbox-input"
                        type="checkbox"
                        id="checkbox2"
                        onChange={(event) => { changeChekedValue(event), onChecked() }} />

                    <label className="checkbox-label"></label>
                </div>
            </form>
        </>
    )
}