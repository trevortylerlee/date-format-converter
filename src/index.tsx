import { List, ActionPanel, Action } from "@raycast/api";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function main() {
  function formatTime() {
    const dTime = dayjs();
    return [
      // ISO 8601 or similar
      dTime.format("YYYY-MM-DD").toString(),
      dTime.format("YYYY-MM-DD HH:mm:ss").toString(),
      dTime.format("YYYY-MM-DD HH:mm:ss.SSS").toString(),
      dTime.format("YYYY-MM-DD HH:mm:ssZ").toString(),
      dTime.format().toString(),
      dTime.utc().format().toString(),
      // Unix timestamps
      dTime.unix().toString(),
      dTime.valueOf().toString(),
      // Localized formats
      dTime.format("L").toString(),
      dTime.format("L LT").toString(),
      dTime.format("LLL").toString(),
      dTime.format("LLLL").toString(),
      dTime.format("LT").toString(),
      dTime.format("LTS").toString(),
    ];
  }

  type ActionItem = {
    item: {
      content: string;
    };
  };

  function Actions({ item }: ActionItem) {
    return (
      <ActionPanel>
        <Action.CopyToClipboard content={item.content} />
        <Action.Paste content={item.content} />
      </ActionPanel>
    );
  }

  const resultList = formatTime();

  return (
    <List>
      {resultList.map((time, index) => (
        <List.Item key={index} title={time.toString()} actions={<Actions item={{ content: time }} />} />
      ))}
    </List>
  );
}
