import { SingleTaskInterface } from "../interfaces/single-task.interface";

const TaskService = (task?: SingleTaskInterface, newTask?: SingleTaskInterface) => {
    let editedTaskList;

    return {
        addTask: function (data: any) {
            let tasks = this.returnTasksList('all')
            let startIndex = JSON.parse(localStorage.getItem('startIndex') as string) ?? 0;
            localStorage.setItem('startIndex', JSON.stringify(++startIndex))
          
            tasks.push({
                id: startIndex,
                title: data.title,
                status: 'undone',
                description: data.description,
                creation_date: new Date().toLocaleDateString()
            })
     
            this.updateTasksList(tasks)
        },

        removeTaskById: function (id: number) {
            editedTaskList = this.returnTasksList().filter((singleTask: SingleTaskInterface) => singleTask.id !== id);
            this.updateTasksList(editedTaskList)
        },

        editTaskById: function (status: boolean) {
            editedTaskList = this.returnTasksList().map((singleTask: SingleTaskInterface) => {
                if (singleTask.id === task?.id) {
                    if (status === true) {
                        singleTask.status = 'done';
                    } else {
                        singleTask.status = 'undone';
                    }
                }

                return singleTask;
            });
          
            this.updateTasksList(editedTaskList);
        },

        returnTasksList: (taskType?: string) => {
            let allTasks = JSON.parse(localStorage.getItem('tasks') as string) ?? [];

            switch (taskType) {
                case 'done':
                    const doneTasks = allTasks?.filter((singleTask: SingleTaskInterface) => singleTask.status === 'done');
                    return doneTasks;
                case 'undone':
                    const undoneTasks = allTasks?.filter((singleTask: SingleTaskInterface) => singleTask.status === 'undone');
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