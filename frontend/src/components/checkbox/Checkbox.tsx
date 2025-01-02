import './checkbox.css'
import taskService from '../../shared/services/tasks.service'

export default function Checkbox({ checkedTask, onChecked }: any) {


    function changeChekedValue(event: any): void {
        taskService(checkedTask).editTaskById(event?.target?.checked);
        onChecked();
    }

    return (
        <>
            <form>
                <div className="checkbox">
                    <input
                        checked={checkedTask.status ===  'done'}
                        className="checkbox-input"
                        type="checkbox"
                        id="checkbox2"
                        onChange={(event) => {changeChekedValue(event), onChecked()}} />

                    <label className="checkbox-label"></label>
                </div>
            </form>
        </>
    )
}