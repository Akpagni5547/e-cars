import {
  Body,
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from '../user/guards/jwt-auth.guard';
import { AddRequestDto } from './dto/add-request.dto';
import { RequestEntity } from '../../entities/request.entity';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
  constructor(
    private requestService: RequestService,
    private reflector: Reflector,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('request.get.all')
  @CacheTTL(60 * 60 * 24)
  async getAllRequest(@User() user): Promise<RequestEntity[]> {
    console.log('WE ARE IN THE  REQUEST');
    return await this.requestService.getRequests(user);
  }

  @Post()
  async addRequest(
    @Body() addRequestDto: AddRequestDto,
  ): Promise<RequestEntity> {
    console.log('SEE THE ID ');
    return await this.requestService.addRequest(addRequestDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getRequest(
    @Param('id', ParseIntPipe) id,
    @User() user,
  ): Promise<RequestEntity> {
    return await this.requestService.findRequestById(id, user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateRequest(
    @Body() addRequestDto: Partial<AddRequestDto>,
    @Param('id', ParseIntPipe) id: number,
    @User() user,
  ): Promise<RequestEntity> {
    return await this.requestService.updateRequest(id, addRequestDto, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteRequest(@Param('id', ParseIntPipe) id: number, @User() user) {
    return this.requestService.softDeleteRequest(id, user);
  }
}
