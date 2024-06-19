import { CalendarIntegration as TCalendarIntegration } from "../api/calendarIntegration/CalendarIntegration";

export const CALENDARINTEGRATION_TITLE_FIELD = "accessToken";

export const CalendarIntegrationTitle = (
  record: TCalendarIntegration
): string => {
  return record.accessToken?.toString() || String(record.id);
};
