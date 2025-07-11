import { Router } from "express";
import { NotificationService } from "../services/notification-service";

export class NotificationRouter {
  private router: Router;

  constructor(private notificationService: NotificationService) {
    this.router = Router();
  }

  public initializeRoutes(): Router {

    this.router.get("/api/notification/get", async (req, res) => {
      const notification = await this.notificationService.getNotifications();
      res.status(200).json(notification);
    });

    this.router.get("/api/notification/getUnReadCount/:userId", async (req, res) => {
      const notification = await this.notificationService.getCurrentUserUnReadNotificationCount(Number(req.params.userId));
      res.status(200).json(notification);
    });

    this.router.get("/api/notification/getUnReadRecords/:userId", async (req, res) => {
      const notification = await this.notificationService.getCurrentUserUnReadNotificationRecords(Number(req.params.userId));
      res.status(200).json(notification);
    });

    this.router.get("/api/notification/updateReadStatus/:notificationId", async (req, res) => {
      const notification = await this.notificationService.updateNotificationStatus(Number(req.params.notificationId));
      res.status(200).json(notification);
    });

    return this.router;
  }
}
