import { Controller, Get } from '@nestjs/common';

//Creating a controller to handle requests
@Controller()
export class AppController {
	//Route handler
	@Get()
	getRootRoute() {
		return 'Hi there!';
	}
}
