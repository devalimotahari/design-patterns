class Logger {
    private static instance: Logger;

    private constructor() {
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Logger();
        return this.instance;
    }

    error(msg: any) {
        console.error(msg);
    }

    log(msg: any) {
        console.log(msg);
    }

    info(msg: any) {
        console.info(msg);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log(`is equal: ${logger1 === logger2}`);

logger1.error('this is error');
logger2.info('this is info');
