import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new UnauthorizedException('Unauthorized access');

    const isValidPassword = user.password === password;

    if (!isValidPassword)
      throw new UnauthorizedException('Unauthorized access');

    return { access_token: this.jwtService.sign({ userId: user.id }) };
  }
}
