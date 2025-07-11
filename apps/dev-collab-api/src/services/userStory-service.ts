// services/userStory-service.ts
import { inject, injectable } from "inversify";
import { IDbContext } from "../db/db-context";
import { UserStory } from "../entities/userStory";
import { TYPES } from "../container/types"; // Ensure TYPES is imported

// Define the IUserStoryService interface
export interface IUserStoryService {
  createUserStory(data: Partial<UserStory>): Promise<UserStory>;
  getAllUserStories(): Promise<UserStory[]>;
  getUserStoryById(id: number): Promise<UserStory | null>;
  updateUserStory(id: number, data: Partial<UserStory>): Promise<UserStory | null>;
  deleteUserStory(id: number): Promise<void>;
  upvoteUserStory(id: number): Promise<UserStory | null>;
  downvoteUserStory(id: number): Promise<UserStory | null>;
}

@injectable()
export class UserStoryService implements IUserStoryService {
  constructor(
      @inject(TYPES.IDbContext) private dbContext: IDbContext // Use TYPES.IDbContext here
  ) {}

  // Create a new user story
  async createUserStory(data: Partial<UserStory>): Promise<UserStory> {
 
    data.dueDate = new Date();
    const userStory = this.dbContext.userStories.create(data);
    this.dbContext.needCreate(userStory);
    await this.dbContext.save();  // Save transaction
    return userStory;
  }

  // Find all user stories
  async getAllUserStories(): Promise<UserStory[]> {
    return await this.dbContext.userStories.find();
  }

  // Find user story by ID
  async getUserStoryById(id: number): Promise<UserStory | null> {
    return await this.dbContext.userStories.findOneBy({ userStoryId: id });
  }

  // Update user story
  async updateUserStory(id: number, data: Partial<UserStory>): Promise<UserStory | null> {
    const userStory = await this.getUserStoryById(id);
    if (userStory) {
      Object.assign(userStory, data);
      this.dbContext.needUpdate(userStory);
      await this.dbContext.save();
    }
    return userStory;
  }

  // Delete user story
  async deleteUserStory(id: number): Promise<void> {
    const userStory = await this.getUserStoryById(id);
    if (userStory) {
      this.dbContext.needRemove(userStory);
      await this.dbContext.save();
    }
  }
  // Upvote a user story
  async upvoteUserStory(id: number): Promise<UserStory | null> {
    const userStory = await this.getUserStoryById(id);
    if (userStory) {
      userStory.upvoteCount += 1; // Increment upvote count
      this.dbContext.needUpdate(userStory);
      await this.dbContext.save();
      return userStory;
    }
    return null;
  }

  // Downvote a user story
  async downvoteUserStory(id: number): Promise<UserStory | null> {
    const userStory = await this.getUserStoryById(id);
    if (userStory) {
      userStory.downvoteCount += 1; // Increment downvote count
      this.dbContext.needUpdate(userStory);
      await this.dbContext.save();
      return userStory;
    }
    return null;
  }
}
