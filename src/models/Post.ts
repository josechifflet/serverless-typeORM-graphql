import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './user';


@ObjectType()
@Entity()
export default class Post extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  content: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  /** @Timestamps */

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Date)
  @DeleteDateColumn()
  deletedAt: Date;
}
