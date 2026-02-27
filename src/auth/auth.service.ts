import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

 async register(email: string, password: string) {
  console.log("Registering:", email);

  const hashed = await bcrypt.hash(password, 10);
  const user = new this.userModel({ email, password: hashed });

  const savedUser = await user.save();
  console.log("Saved user:", savedUser);

  return savedUser;
}

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new UnauthorizedException('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new UnauthorizedException('Invalid password');

    const payload = { sub: user._id };

    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}

