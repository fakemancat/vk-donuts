export interface DonateReward {
    /**
     * ID вознаграждения в системе.
     */
    id: number;
    /**
     * Название вознаграждения.
     */
    title: string;
    /**
     * Статус выдачи вознаграждения.
     * Возможные значения:
     * not_sended - не выдано;
     * sended - выдано.
     */
    status: 'not_sended' | 'sended';
}

export interface Donate {
    /**
     * ID донаты в системе.
     */
    id: number;
    /**
     * VK ID пользователя совершившего донат. Если донаты отправлен анонимно, то значение данного поле будет 0.
     */
    user: number;
    /**
     * Временная метка по UNIX (в миллисекундах) даты и времени доната.
     */
    date: number;
    /**
     * Сумма доната в рублях.
     */
    amount: number;
    /**
     * Сумма поступившая на баланс приложения в копейках. Данное поле будет отсутствовать если донат был отправлен через VK Pay, либо импортирован из другого приложения.
     */
    total?: number;
    /**
     * Сообщение прикрепленное к донату.
     */
    msg?: string;
    /**
     * Анонимность доната.
     */
    anonym: boolean;
    /**
     * Ответ администратора группы на донат.
     */
    answer?: string;
    /**
     * Если донат был отправлен через VK Pay, то значение данного поля будет равно true.
     */
    vkpay: boolean;
    /**
     * Статус доната
     * Возможные значения:
     * new - новый донат;
     * public - опубликован;
     * hidden - скрыт.
     */
    status: 'new' | 'public' | 'hidden';
    /**
     * Если не было выбрано вознаграждение, то данное поле будет отсутствовать.
     */
    reward?: DonateReward[];
    /**
     * Данный параметр содержит целое положительное число, которое присваивается донату, при переходе пользователя по ссылке при донате.
     *
     * Для использования данного параметра, добавьте к ссылке хеш вида #op_123456789, где вместо 123456789 можно указать любое целое положительное число в интервале от 1 до 4294967295.
     *
     * Пример ссылки на приложение - https://vk.com/app6887721_-179267503#op_123456789.
     *
     * Если вы хотите использовать данный параметр вместе с функцией автоподставления суммы доната, хеш должен иметь вид #donate_100&op_123456789 или #donate&op_123456789.
     */
    op: number;
}