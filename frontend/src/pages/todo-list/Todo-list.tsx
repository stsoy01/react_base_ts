import {
    useRef,
    useState,
    useEffect
} from 'react'
import Dialog from '../../components/dialog/Dialog';
import Header from '../../components/header/Header';
import TaskService from '../../shared/services/tasks.service';
import SingleTask from '../../components/single-task/Single-task';
import CurrentSectionService from '../../shared/services/current-section.service';
import './todo-list.css'

export default function TodoList() {
    const [taskList, setTaskList] = useState([]);
    const [taskDataPOST, setTaskDataPOST] = useState({ title: '', description: '' })
    const [_position, setPosition] = useState({ isBottom: true });
    const [active, setActive] = useState(CurrentSectionService().getSection());
    const [currentSection, setCurrentSection] = useState(CurrentSectionService().getSection())
    const [tasksOverview, setTaskOverview] = useState(TaskService().returnTasksList('all')?.length ? `У вас всего ${TaskService().returnTasksList()?.length} задач` : 'Список задач пуст');

    let addTaskButton;
    if (currentSection === 'all') {
        addTaskButton = <button
            onClick={() => toggleDialog()}
            className='dialog__btn'
            title='dialog'
        >{'Добавить задачу'}</button>
    }

    const dialogRef = useRef<HTMLDialogElement>(null);
    function toggleDialog(): void {
        if (!dialogRef.current) {
            return
        }

        dialogRef.current.hasAttribute('open') ? dialogRef.current.close() : dialogRef.current.showModal();
    }

    useEffect(() => {
        getTaskList();
    }, [])

    function getTaskList(): void {
        const tasks = TaskService().returnTasksList(currentSection);
        setTaskList(tasks as never);
        const allTaskList = TaskService().returnTasksList('all');
        setTaskOverview(`У вас всего ${allTaskList?.length} задач`)
    }

    function onChecked(): void {
        pickTaskList(currentSection);
    }

    function pickTaskList(project: string,): any {
        setTaskList(TaskService().returnTasksList(project));
        CurrentSectionService().setSection(project);
        setCurrentSection(project);
        setActive(project)
    }

    const taskDataPostHandleChange = (event: any, key: string) => {
        setTaskDataPOST({ ...taskDataPOST, [key]: event.target.value })
    }

    function saveNewTask(event: any): void {
        if (!taskDataPOST.title) {
            return;
        }

        event.preventDefault();
        TaskService().addTask(taskDataPOST);
        onChecked();
        setTaskDataPOST({ title: '', description: '' })
        getTaskList()
        toggleDialog();
    }



    return (
        <>
            <div className="container">
                <div style={{ position: 'relative' }}>
                    <Header
                        tasksOverview={tasksOverview}
                        borderRadius={_position.isBottom}
                    ></Header>

                    <button
                        className='btn_switch'
                        title='task-container-position'
                        onClick={() => setPosition({ isBottom: !_position.isBottom })}
                    ></button>
                </div>

                <section
                    className='task__container'
                    style={{
                        overflow: _position.isBottom ? 'hidden' : 'auto',
                        height: _position.isBottom ? '0' : '370px',
                    }}>

                    <div className='task__sections'>
                        <button
                            className='task__section-btn'
                            style={{ fontWeight: active === 'all' ? '600' : '', color: active === 'all' ? 'lightGrey' : '' }}
                            onClick={() => pickTaskList('all')}
                        >{'Все'}</button>

                        <button
                            style={{ fontWeight: active === 'done' ? '600' : '', color: active === 'done' ? 'lightGrey' : '' }}
                            className='task__section-btn'
                            onClick={() => pickTaskList('done')}
                        >{'Выполнено'}</button>

                        <button
                            style={{ fontWeight: active === 'undone' ? '600' : '', color: active === 'undone' ? 'lightGrey' : '' }}
                            className='task__section-btn'
                            onClick={() => pickTaskList('undone')}
                        >{'Незавершено'}</button>
                    </div>

                    <div className='task__bottom'>
                        <SingleTask
                            onChecked={onChecked}
                            tasksList={taskList}
                            onRemove={getTaskList}
                        ></SingleTask>

                        {addTaskButton}
                    </div>

                    <Dialog 
                          onSave={(event) => saveNewTask(event)} 
                          toggleDialog={toggleDialog} 
                          ref={dialogRef}>
                        <>
                            <form >
                                <h3 style={{ marginBottom: '30px', fontWeight: '600' }}>{'Добавить задание'}</h3>
                                <input
                                    type='text'
                                    required={true}
                                    className='formInput'
                                    placeholder='Заголовок'
                                    onKeyUp={(event) => taskDataPostHandleChange(event, 'title')} />
                                <input
                                    type='text'
                                    className='formInput'
                                    placeholder='Описание'
                                    onKeyUp={(event) => taskDataPostHandleChange(event, 'description')} />
                            </form>
                        </>
                    </Dialog>
                </section>
            </div >
        </>
    )
}
