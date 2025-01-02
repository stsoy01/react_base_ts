import { SingleTaskInterface } from "../interfaces/single-task.interface";

const TaskService = (task?: SingleTaskInterface, newTask?: SingleTaskInterface) => {
    let editedTaskList;

    return {
        addTask: function () {

        },

        removeTaskById: function (id: number) {
            editedTaskList = this.returnTasksList().filter((singleTask: SingleTaskInterface) => singleTask.id !== id);
            this.updateTasksList(editedTaskList)
        },

        editTaskById: function (status: boolean) {
            editedTaskList = this.returnTasksList().map((singleTask: any) => {
                if (singleTask.id === task?.id) {
                    if (status === true) {
                        singleTask.status = 'done';
                    } else {
                        singleTask.status = 'undone';
                    }
                }

                return singleTask;
            });

            this.updateTasksList(editedTaskList)
        },

        returnTasksList: (taskType?: string) => {
            let allTasks = JSON.parse(localStorage.getItem('tasks') as string);

            switch (taskType) {
                case 'done':
                    const doneTasks = allTasks?.filter((singleTask: any) => singleTask.status === 'done');
                    return doneTasks;
                case 'undone':
                    const undoneTasks = allTasks?.filter((singleTask: any) => singleTask.status === 'undone');
                    return undoneTasks;
                default:
                    return allTasks;
            }
        },

        updateTasksList: function (newTaskList: any): void {
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
        }
    }
}

export default TaskService;