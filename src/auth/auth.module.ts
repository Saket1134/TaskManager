const { Module } = require('@nestjs/common');
const { JwtModule } = require('@nestjs/jwt');
const { PassportModule } = require('@nestjs/passport');

const { AuthService } = require('./auth.service');
const { AuthController } = require('./auth.controller');
const { JwtStrategy } = require('./jwt.strategy');
const { UsersModule } = require('../users/users.module');

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'mySecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})

export class AuthModule {}

module.exports = { AuthModule };