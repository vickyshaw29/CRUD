import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
//   @IsString()
//   name: string;
//   @IsString()
//   user: string;
}
