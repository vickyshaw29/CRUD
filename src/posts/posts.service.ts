import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Posts, PostsDocument } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private postModel: Model<PostsDocument>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const { name, user } = createPostDto;
    const post = await this.postModel.findOne({ name });
    if (post) {
      throw new BadRequestException('Post already exists');
    }
    const newPost = new this.postModel({
      name,
      user,
    });
    await newPost.save();
    return newPost;
  }

  findAll() {
    return this.postModel.find();
  }

  async findOne(id: string) {
    const foundPost = await this.postModel.findById(id);
    try {
      if (!foundPost) {
        throw new BadRequestException('Post not found');
      }
      return foundPost;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const foundPost = await this.postModel.findByIdAndUpdate(id, updatePostDto);
    if (!foundPost) {
      throw new BadRequestException('Post not found');
    }
    return {
      msg: 'Post updated successfully',
    };
  }

  async remove(id: string) {
    const foundPost = await this.postModel.findByIdAndDelete(id);
    if (!foundPost) {
      throw new BadRequestException('Post not found');
    }
    return {
      msg: 'Post deleted successfully',
    };
  }
}
