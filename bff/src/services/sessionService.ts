// src/services/sessionService.ts

import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

// DynamoDBクライアント
const client = new DynamoDBClient({ region: "ap-northeast-1" });

export const createSession = async (userId: string, deviceId: string) => {
  const sessionId = uuidv4();
  const createdAt = new Date().toISOString();
  const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // 7日後（TTL）

  const params = {
    TableName: "SessionTable",
    Item: {
      sessionId: { S: sessionId },
      userId: { S: userId },
      deviceId: { S: deviceId },
      createdAt: { S: createdAt },
      expiresAt: { N: expiresAt.toString() },
      isRevoked: { BOOL: false },
      meta: {
        M: {
          userAgent: { S: "Mozilla/5.0" },
          ipAddress: { S: "203.0.113.1" },
        },
      },
    },
  };

  try {
    await client.send(new PutItemCommand(params));
    console.log(`✅ セッション作成成功: ${sessionId}`);
    return sessionId;
  } catch (err) {
    console.error("❌ セッション作成失敗:", err);
    throw err;
  }
};

export const getAllSessions = async () => {
  const params = {
    TableName: "SessionTable",
  };

  try {
    const result = await client.send(new ScanCommand(params));
    if (!result.Items) return [];

    return result.Items.map((item) => ({
      sessionId: item.sessionId?.S,
      userId: item.userId?.S,
      deviceId: item.deviceId?.S,
      createdAt: item.createdAt?.S,
      expiresAt: Number(item.expiresAt?.N),
      isRevoked: item.isRevoked?.BOOL ?? false,
      meta: {
        userAgent: item.meta?.M?.userAgent?.S ?? null,
        ipAddress: item.meta?.M?.ipAddress?.S ?? null,
      },
    }));
  } catch (err) {
    console.error("❌ セッション一覧取得失敗:", err);
    throw err;
  }
};
