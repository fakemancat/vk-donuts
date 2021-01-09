export interface IAPIErrorParams {
    /**
     * Код ошибки
     */
    code: number;
    /**
     * Сообщение ошибки
     */
    message: string;
}

export class APIError extends Error {
    /**
     * Код ошибки
     */
    public code: number;
    /**
     * Сообщение ошибки
     */
    public message: string;
    /**
     * Имя ошибки
     */
    public name: string;

    /**
     * Создать новую ошибку API
     */
    constructor(params: IAPIErrorParams) {
        const { code, message } = params;

        super(message);

        this.code = code;
        this.message = message;
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}