import { inject, injectable } from "inversify";
import { IDbContext } from "../db/db-context";
import { Comment } from "../entities/comment";

@injectable()
export class CommentService {
  constructor(
    @inject("IDbContext") private dbContext: IDbContext
  ) {}

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // Create a comment
  async createComment(data: Partial<Comment>): Promise<Comment> {
    const comment = this.dbContext.comments.create({
      ...data,
      create_date: this.formatDate(new Date())
    });
    
    this.dbContext.needCreate(comment);
    await this.dbContext.save(); 


    // save the mentioned users to another table

    // Extract user IDs using regex
    const mentionedUserIds = Array.from(
      data.comment!.matchAll(/data-user-id="(\d+)"/g),
      match => parseInt(match[1])
    ).filter(id => !isNaN(id));

    if (mentionedUserIds.length > 0) {
      for (const userId of mentionedUserIds) {
        await this.dbContext.notifications.query(
          `INSERT INTO notification (comment_id, mentioned_user_id, read_date) VALUES (?, ?, ?)`,
          [comment.comment_id, userId, this.formatDate(new Date())]
        );
      }
    }
    
    return comment;
}

  private formatCommentDates(comments: Comment[]): Comment[] {
    return comments.map(comment => ({
      ...comment,
      create_date: this.formatDate(new Date(comment.create_date))
    }));
  }

  // Find all comments
  async getComments(): Promise<Comment[]> {
    const comments = await this.dbContext.comments.find();
    return this.formatCommentDates(comments);
  }

  // Find comment by project_id
  async getCommentsByProjectId(project_id: number): Promise<Comment[]> {
    const comments = await this.dbContext.comments.findBy({
      project_id: project_id
    });
    return this.formatCommentDates(comments);
  }

  // Find comment by task_id
  async getCommentsByTaskId(task_id: number): Promise<Comment[]> {
    const query = `
      SELECT 
        c.*,
        u.name as author_name
      FROM comment c
      LEFT JOIN users u ON c.author_user_id = u.user_id
      WHERE c.task_id = ?
    `;
  
    const comments = await this.dbContext.comments.query(query, [task_id]);
    return this.formatCommentDates(comments);
  }

  async getAllUsers() {
    const query = `
      SELECT 
        user_id,
        name
      FROM users
    `;
  
    const users = await this.dbContext.comments.query(query);
    return users;
  }
}