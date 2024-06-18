import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const notifications = notificationData.default || [];
  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
