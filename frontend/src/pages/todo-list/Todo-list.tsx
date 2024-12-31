import {
    useEffect,
    useState
} from 'react'
import Header from '../../components/header/Header';
import TaskService from '../../shared/services/tasks.service';
import SingleTask from '../../components/single-task/Single-task';
import './todo-list.css'

export default function TodoList() {

    const [tasksOverview] = useState(TaskService().returnTasksList()?.length ? `У вас всего ${TaskService().returnTasksList()?.length} задач` : 'Список задач пуст');
    const [_position, setPosition] = useState({ isBottom: true });
    const [taskList, setTaskList] = useState([]);


    useEffect(() => {
        // localStorage.setItem('tasks',JSON.stringify([
        //     {
        //         id: 1,
        //         status: 'done',
        //         title: 'Позвонить маме',
        //         description: 'Договориться о встрече на четверг',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 2,
        //         status: 'undone',
        //         title: 'Сити Банк',
        //         description: 'Открыть сберегательный вклад',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 3,
        //         status: 'done',
        //         title: 'Написать CV',
        //         description: 'Получить оффер от MindBox',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 4,
        //         status: 'done',
        //         title: 'Футбол',
        //         description: 'Позвонить Артему',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 5,
        //         status: 'undone',
        //         title: 'ТО машины',
        //         description: 'Анна Б. поможет с контактом',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 6,
        //         status: 'done',
        //         title: 'Продукты',
        //         description: 'Купить продукты',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 7,
        //         status: 'undone',
        //         title: 'Сервисный центр',
        //         description: 'Забрать телефон',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 8,
        //         status: 'undone',
        //         title: 'Послушать новый альбом Depeche Mode',
        //         description: 'Диск у Регины',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        //     {
        //         id: 9,
        //         status: 'done',
        //         title: 'Дописать сервис в приложении',
        //         description: 'Референс у Кости',
        //         creation_date: new Date().toLocaleDateString()
        //     },
        // ]))
        let tasks = TaskService().returnTasksList;
        setTaskList(tasks as any)
    }, [])

    function pickTaskList(project: string): any {
        setTaskList(TaskService().returnTasksList(project))
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
                            onClick={() => pickTaskList('all')}
                        >{'Все'}</button>

                        <button
                            className='task__section-btn'
                            onClick={() => pickTaskList('done')}
                        >{'Выполнено'}</button>

                        <button
                            className='task__section-btn'
                            onClick={() => pickTaskList('undone')}
                        >{'Незавершено'}</button>
                    </div>

                    <SingleTask tasksList={taskList}></SingleTask>
                </section>
            </div >
        </>
    )
}