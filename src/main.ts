import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//entry point for Nest application
async function bootstrap() {
	//Creating instance of application
	const app = await NestFactory.create(AppModule);

	//allowing instance to listen on port 3000
	await app.listen(3000);
}

//starting the application
bootstrap();
