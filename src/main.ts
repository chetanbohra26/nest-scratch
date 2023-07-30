//Tools provided by Nest to create a controller and a module
import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

//Creating a controller to handle requests
@Controller()
class AppController {
	//Route handler
	@Get()
	getRootRoute() {
		return 'Hi there!';
	}
}

//Creating a module to use above controller
@Module({
	controllers: [AppController],
})
class AppModule {}

//entry point for Nest application
async function bootstrap() {
	//Creating instance of application
	const app = await NestFactory.create(AppModule);

	//allowing instance to listen on port 3000
	await app.listen(3000);
}

//starting the application
bootstrap();
