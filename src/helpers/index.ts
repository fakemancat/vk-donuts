import fetch from 'node-fetch';

export async function request(url: string, params: Record<string, any>): Promise<any> {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
        method: 'POST'
    });

    return response.json();
}