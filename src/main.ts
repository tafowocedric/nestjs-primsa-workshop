import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // binds validationPipe to the entire applicaiton
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // apply transform to all response
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  // apply primsa exception filter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(process.env.PORT);
  console.log(
    `\nServer is running on: http://localhost:${process.env.PORT || 3000}\n`,
  );
}
bootstrap();
