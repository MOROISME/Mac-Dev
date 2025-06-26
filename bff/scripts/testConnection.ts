import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-northeast-1" });

const testConnection = async () => {
  try {
    const result = await client.send(new ListTablesCommand({}));
    console.log("✅ DynamoDB接続成功！テーブル一覧:", result.TableNames);
  } catch (error) {
    console.error("❌ 接続エラー:", error);
  }
};

testConnection();
