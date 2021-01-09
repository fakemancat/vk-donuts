import { Objects } from '.';

export interface GeneralResponse {
    /**
     * Успешность обработки запроса сервером.
     */
    success: boolean;
}

export interface GetDonatesResponse extends GeneralResponse {
    /**
     * Текстовое сообщение с результатом выполнения запроса.
     */
    msg: string;
    /**
     * Список донатов.
     */
    list: Objects.Donate[];
}