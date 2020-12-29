import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { EncryptionTransformer } from 'typeorm-encrypted';
import Post from './Post';


@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(() => String)
  @Column()
  firstname: string;

  @Field(() => String)
  @Column()
  lastname: string;

  @Field(() => String)
  @Column()
  nickname: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column({transformer: new EncryptionTransformer({
    key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: 'ff5ac19190424b1d88f9419ef949ae56'
  })})
  password: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];

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
