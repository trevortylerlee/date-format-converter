import { showHUD, Clipboard } from "@raycast/api";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default async function main() {
  const date = dayjs().utc().format().toString();

  Clipboard.copy(date);
  await showHUD(`Copied ${date} to clipboard`);
}
