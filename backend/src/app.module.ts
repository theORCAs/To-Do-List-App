import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { config } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [AppController, ItemController],
  providers: [AppService],
})
export class AppModule { }
