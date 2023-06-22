import logger from './core/logger';

const info = {
  level: 'info', // Level of the logging message
  message: 'Hey! Log something?', // Descriptive message being logged.
};

export function helloWorld(): void {
  logger.log(info);
  logger.log('error', 'hello', { message: 'world' });
}
