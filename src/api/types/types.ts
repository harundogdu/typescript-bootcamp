export interface ITodoItem {
    id: string;
    title: string;
    isCompleted: boolean;
}

export interface ITodoRequestBody extends Pick<ITodoItem, 'title'> {
    title: string
}

export interface SuccessResponse {
    success: boolean;
    message: string;
}