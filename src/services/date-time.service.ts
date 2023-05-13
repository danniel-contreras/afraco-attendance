import axios from "axios";

export const get_current_time = async () => {
  const {data} = await  axios.get<DateTime>("https://worldtimeapi.org/api/timezone/America/El_Salvador");

 return data;
};

export interface DateTime {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean;
  dst_from: number | null;
  dst_offset: number
  dst_until: number | null;
  raw_offset:number;
  timezone: string
  unixtime: number;
  utc_datetime: string
  utc_offset: string
  week_number: number
}
