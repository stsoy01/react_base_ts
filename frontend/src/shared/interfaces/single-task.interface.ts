type TaskStatus = 'done' | 'undone'

export interface SingleTaskInterface {
    id: number;
    status: TaskStatus;
    title: string;
    description?: string;
    creation_date: string;
}

