import { Test, TestingModule } from '@nestjs/testing';
import { TrpcController } from './app.controller';
import { AppService } from './app.service';
import { Request, Response } from 'express';



describe('AppController', () => {
  let appController: TrpcController;


  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;


  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TrpcController],
      providers: [AppService],
    }).compile();

    appController = app.get<TrpcController>(TrpcController);



    req = {};
    jsonMock = jest.fn(); // Mocking res.json
    res = {
      json: jsonMock,
    };
  });

  describe('root', () => {
    it('should return "Hello from tRPC"', async () => {
      

      await appController.getMessage(req as Request, res as Response);

      expect(jsonMock).toHaveBeenCalledWith('Hello from tRPC');
    });
  });
});
