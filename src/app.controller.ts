import { Controller, Get, Req, Res } from '@nestjs/common';
//import { AppService } from './app.service';
import { appRouter } from './trpc/index';
import { Request, Response } from 'express';

// tRPC controller for NestJS
@Controller('trpc')
export class TrpcController {
  @Get('message')
  async getMessage(@Req() req: Request, @Res() res: Response) {
    // call the getMessage procedure from src/trpc/index.ts
    const result = await appRouter.createCaller({}).getMessage();

    res.json(result);
  }
}
