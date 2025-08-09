import { date } from "@/lib/dayjs";

export function formatMinutesToHour(minutes: number): string{
   
  const dur = date.duration(minutes, 'minutes');
  const hours = dur.hours();
  const mins = dur.minutes();
  return [
    hours > 0 ? `${hours}h` : null,
    mins > 0 ? `${mins}m` : null
  ].filter(Boolean).join(' ');

}