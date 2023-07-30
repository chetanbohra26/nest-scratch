import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

//Creating a module to use controller
@Module({
	controllers: [AppController],
})
export class AppModule {}
