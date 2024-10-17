import { Module } from '@nestjs/common';
import { TrpcController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TrpcController],
  providers: [AppService],
})
export class AppModule {}
