import { inject, injectable } from "inversify";
import { IDbContext } from "../db/db-context";
import { Notification } from "../entities/notification";

@injectable()
export class NotificationService {
  constructor(
    @inject("IDbContext") private dbContext: IDbContext // Inject DbContext
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
  
  // testing get all records
  async getNotifications(): Promise<Notification[]> {
  
    return await this.dbContext.notifications.find()
  }

  async getCurrentUserUnReadNotificationCount(user_id: number) {

    const unReadCount = await this.dbContext.notifications.countBy({
      mentioned_user_id: user_id,
      is_read: false
    });

    return unReadCount 
  }

  async getCurrentUserUnReadNotificationRecords(user_id: number) {
    const query = `
      SELECT 
        n.notification_id,
        n.mentioned_user_id,
        mentioned_user.name as mentioned_user_name,
        n.is_read,
        c.comment_id,
        c.project_id,
        c.task_id,
        c.comment,
        c.author_user_id,
        author_user.name as author_name,
        c.create_date
      FROM notification n
      LEFT JOIN comment c ON n.comment_id = c.comment_id
      LEFT JOIN users mentioned_user ON n.mentioned_user_id = mentioned_user.user_id
      LEFT JOIN users author_user ON c.author_user_id = author_user.user_id
      WHERE n.mentioned_user_id = ?
      AND n.is_read = false
      ORDER BY c.create_date DESC
    `;

    const notifications = await this.dbContext.notifications.query(query, [user_id]);
    return notifications;
  }


  async updateNotificationStatus(notificationId: number) {
    const query = `
      UPDATE notification 
      SET is_read = 1, read_date = ?
      WHERE notification_id = ?
    `;

    const result = await this.dbContext.notifications.query(query, [this.formatDate(new Date()), notificationId]);
    return result;
}


}
