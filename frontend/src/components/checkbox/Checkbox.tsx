import './checkbox.css'
import taskService from '../../shared/services/tasks.service'

export default function Checkbox({ checkedTask }: any) {

    function changeChakedValue(event: any): void {
        taskService(checkedTask).editTask(event?.target?.checked);
    }

    return (
        <>
            <label className="checkbox__container">
                <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    onChange={event => changeChakedValue(event)}
                />

                <span className="checkmark"></span>
            </label>
        </>
    )
}