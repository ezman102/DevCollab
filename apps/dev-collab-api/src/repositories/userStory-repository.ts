// repositories/userStory-repository.ts
import { Repository } from "typeorm";
import { UserStory } from "../entities/userStory"; // Import the UserStory entity
import { DbContext } from "../db/db-context"; // Assuming you use DbContext now

export class UserStoryRepository {
  private userStoryRepository: Repository<UserStory>;

  constructor(private dbContext: DbContext) {
    this.userStoryRepository = dbContext.userStories; // Access the repository from DbContext
  }

  // Get all user stories
  public async findAll(): Promise<UserStory[]> {
    return await this.userStoryRepository.find({
      relations: ["project", "sprint"], // Fetch related entities
    });
  }

  // Create a new user story
  public async create(userStoryData: Partial<UserStory>): Promise<UserStory> {
    const newUserStory = this.userStoryRepository.create(userStoryData);
    this.dbContext.needCreate(newUserStory);
    await this.dbContext.save();
    return newUserStory;
  }

  // Find a user story by ID
  public async findById(id: number): Promise<UserStory | null> {
    return await this.userStoryRepository.findOne({
      where: { userStoryId: id },
      relations: ["project", "sprint"], // Include relationships if needed
    });
  }

  // Update a user story
  public async update(id: number, userStoryData: Partial<UserStory>): Promise<UserStory | null> {
    const userStory = await this.findById(id);
    if (userStory) {
      Object.assign(userStory, userStoryData); // Merge the changes
      this.dbContext.needUpdate(userStory);
      await this.dbContext.save(); // Commit changes to the database
      return userStory;
    }
    return null; // Return null if user story was not found
  }

  // Delete a user story
  public async delete(id: number): Promise<void> {
    const userStory = await this.findById(id);
    if (userStory) {
      this.dbContext.needRemove(userStory);
      await this.dbContext.save(); // Commit deletion to the database
    }
  }
  // Upvote a user story
  public async upvote(id: number): Promise<UserStory | null> {
    const userStory = await this.findById(id);
    if (userStory) {
      userStory.upvoteCount += 1; // Increment upvote count
      this.dbContext.needUpdate(userStory);
      await this.dbContext.save();
      return userStory;
    }
    return null; // Return null if user story was not found
  }

  // Downvote a user story
  public async downvote(id: number): Promise<UserStory | null> {
    const userStory = await this.findById(id);
    if (userStory) {
      userStory.downvoteCount += 1; // Increment downvote count
      this.dbContext.needUpdate(userStory);
      await this.dbContext.save();
      return userStory;
    }
    return null; // Return null if user story was not found
  }
}
