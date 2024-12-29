'use server';

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from 'slugify';
import { writeClient } from "@/sanity/lib/write-client";

export const createToolbox = async (state: any, form: FormData) => {
    const session = await auth();

    if(!session) return parseServerActionResponse({ 
        error: 'not signed in', status: 'ERROR' 
    });

    const { title, description, link } = Object.fromEntries(
        Array.from(form)
    );

    const slug  = slugify(title as string, { lower: true, strict: true });

    try {
        const toolbox = {
            title,
            description,
            image: link,
            slug: {
                _type: slug,
                current: slug,
            },
            author: {
                _type: 'reference',
                _ref: session?.id,
            }
        };

        const result = await writeClient.create({
            _type: 'toolbox',
            ...toolbox
        });

        return parseServerActionResponse({
            ...result,
            error: '',
            status: 'SUCCESS'
        });
        
    } catch (error) {
        console.log(error);

        return parseServerActionResponse({
            error: JSON.stringify(error),
            status: 'ERROR'
        });
    }
}