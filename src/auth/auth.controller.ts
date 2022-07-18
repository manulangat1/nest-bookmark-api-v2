import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login')
  loginUser(): string {
    return 'Hello';
  }
}
