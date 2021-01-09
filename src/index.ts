import { request } from './helpers';
import { APIError } from './utils';
import { Params, Responses, Objects } from './schemas';

class VKDonuts {
    private baseURL: string = 'https://api.vkdonuts.ru';

    /**
     * @param groupId Айди группы
     * @param groupToken Токен группы (получить токен - https://vkhost.github.io)
     */
    public constructor(
        private groupId: number,
        private groupToken: string,
        private apiVersion: number = 1
    ) {}

    /**
     * Универсальный метод вызова api-методов VK Donuts
     * @param methodName Имя метода
     * @param params Параметры метода
     * @description Посмотреть список методов с их параметрами можно на сайте https://vkdonuts.ru/api
     */
    public async callMethod(methodName: string, params: Record<string, any> = {}): Promise<Responses.GeneralResponse & any> {
        console.log({
            ...params,
            token: this.groupToken,
            v: this.apiVersion,
            group: this.groupId
        });
        try {
            const response = await request(`${this.baseURL}/${methodName}`, {
                ...params,
                token: this.groupToken,
                v: this.apiVersion,
                group: this.groupId
            });

            if (response.error) {
                throw new APIError({
                    code: response.error,
                    message: response.msg
                });
            }

            return response;
        } catch (e) {
            throw e;
        }
    }

    public async getDonates(params?: Params.GetDonatesParams): Promise<Responses.GetDonatesResponse> {
        return this.callMethod('donates/get', params);
    }
}

export {
    VKDonuts,
    APIError,

    request,

    Params,
    Objects,
    Responses
};