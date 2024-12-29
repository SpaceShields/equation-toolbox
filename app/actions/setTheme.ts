'use server';

import { cookies } from 'next/headers'
import { Theme } from '@/types/theme.enum'

export async function setCookie(theme: Theme) {
    (await cookies()).set('theme', theme);
}