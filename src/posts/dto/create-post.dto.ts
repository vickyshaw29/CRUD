import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  name: string;
  @IsString()
  user: string;
}
