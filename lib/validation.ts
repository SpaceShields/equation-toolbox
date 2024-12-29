import { z } from 'zod'

export const formSchema = z.object({
    title: z.string().min(3, {message: 'Must be longer than 3 characters'}).max(100, {message: 'Must be less than 100 characters'}),
    description: z.string().min(3, {message: 'Must be longer than 3 characters'}).max(500, {message: 'Must be less than 500 characters'}),
    link: z
        .string()
        .url()
        .refine(async (url) => {
            try {
                const res = await fetch(url, {method: 'HEAD'});
                const contentType = res.headers.get("content-type");
                return contentType?.startsWith('image/');
            } catch {
                return false;
            }
    })
});