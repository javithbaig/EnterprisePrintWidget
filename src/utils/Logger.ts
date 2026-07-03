export class Logger {

    private static enabled = false;

    public static enable(enable: boolean): void {
        this.enabled = enable;
    }

    public static info(message: string, ...data: unknown[]): void {
        if (!this.enabled) {
            return;
        }

        console.log(`[EnterprisePrint] ${message}`, ...data);
    }

    public static warn(message: string, ...data: unknown[]): void {
        if (!this.enabled) {
            return;
        }

        console.warn(`[EnterprisePrint] ${message}`, ...data);
    }

    public static error(message: string, error?: unknown): void {
        console.error(`[EnterprisePrint] ${message}`, error);
    }

    public static group(title: string): void {
        if (!this.enabled) {
            return;
        }

        console.group(`[EnterprisePrint] ${title}`);
    }

    public static groupEnd(): void {
        if (!this.enabled) {
            return;
        }

        console.groupEnd();
    }
}