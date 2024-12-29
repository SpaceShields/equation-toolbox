import { Theme } from "@/types/theme.enum";
import { cookies } from "next/headers";

export async function getCurrentTheme() {
    const nextjsCookies = await cookies();
    return (nextjsCookies.get('theme')?.value as Theme) ?? Theme.Light;
}