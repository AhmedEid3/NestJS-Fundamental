import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<Request>();

    const isAuth = this.validateAuth(request);

    if (!isAuth) return false;

    const isAdmin = this.validateAdmin(request);

    if (isAdmin) return true;

    const isOwner = this.validateOwner(request);

    if (isOwner) return true;

    return false;
  }

  validateAuth(request: Request): boolean {
    // Logic of authentication users
    const authHeader = request.header('Authorization');

    return authHeader === 'Bearer authenticated';
  }

  validateAdmin(request: Request): boolean {
    // Logic of Admin Role
    return true;
  }

  validateOwner(request: Request): boolean {
    // Logic of Owner Role
    return false;
  }
}
