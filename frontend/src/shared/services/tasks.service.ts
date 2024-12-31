import { SingleTaskInterface } from "../interfaces/single-task.interface";

const TaskService = (task?: SingleTaskInterface, newTask?: SingleTaskInterface) => {
    let fullListTask;

    return {
        addTask: function () {

        },

        removeTask: function () {

        },

        editTask: function (status: boolean) {
            fullListTask = this.returnTasksList().map((el: any) => {
                if (el.id === task?.id) {
                    if (status === true) {
                        el.status = 'done';
                    } else {
                        el.status = 'undone';
                    }
                }
                return el;
            });

            this.updateTasksList(fullListTask)
        },

        returnTasksList: (taskType?: string) => {
            let allTasks = JSON.parse(localStorage.getItem('tasks') as string);
            switch (taskType) {
                case 'done':
                    const doneTasks = allTasks.filter((el: any) => el.status === 'done');
                    return doneTasks;
                case 'undone':
                    const undoneTasks = allTasks.filter((el: any) => el.status === 'undone');
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