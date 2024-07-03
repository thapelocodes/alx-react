import { fromJS } from "immutable";
import { getUnreadNotificationsByType } from "./notificationSelector";

describe("getUnreadNotificationsByType selector tests", () => {
  const notifications = fromJS([
    { id: 1, type: "default", isRead: false },
    { id: 2, type: "urgent", isRead: false },
    { id: 3, type: "default", isRead: true },
  ]);
  const state = fromJS({
    notifications,
    filter: "default",
  });

  it("returns all unread notifications when filter is 'default'", () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(2);
    expect(result.get(0).get("id")).toBe(1);
    expect(result.get(1).get("id")).toBe(2);
  });

  it("returns unread urgent notifications when filter is 'urgent'", () => {
    const newState = state.set("filter", "urgent");
    const result = getUnreadNotificationsByType(newState);
    expect(result.size).toBe(1);
    expect(result.get(0).get("id")).toBe(2);
  });
});
