import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFoundError } from '../errors';

@Catch(NotFoundError)
export class NotFoundErrorFilter implements ExceptionFilter {
  catch(exception: NotFoundError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    response.status(404).json({
      statusCode: 404,
      message: exception.message,
    });
  }
}
