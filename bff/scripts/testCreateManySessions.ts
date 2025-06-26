import { createSession } from "../src/services/sessionService";

const main = async () => {
  const userIds = ["user001", "user002", "user003"];
  const devices = ["device-web", "device-ios", "device-android"];

  for (const userId of userIds) {
    for (const deviceId of devices) {
      await createSession(userId, deviceId);
    }
  }

  console.log("✅ 複数セッション作成完了");
};

main();
