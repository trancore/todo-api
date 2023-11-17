﻿import { PrismaClient } from '@prisma/client';

import { TokenData } from '../types/authentication';

export const tokenRepository = async () => {
  const prisma = new PrismaClient();

  const saveToken = async (
    userId: number,
    { accessToken, refreshToken }: TokenData,
  ) => {
    await prisma.token.upsert({
      where: {
        id: userId,
      },
      update: {
        accessToken: accessToken,
        // TODO refreshTokenの取得
        refreshToken: refreshToken || 'hoge',
      },
      create: {
        user_id: userId,
        accessToken: accessToken,
        // TODO refreshTokenの取得
        refreshToken: refreshToken || 'hoge',
      },
    });
  };

  const deleteToken = async (nodeId: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          node_id: nodeId,
        },
      });

      // TODO 一旦エラーを返す
      if (!user) throw Error;

      const userId = user.id;

      await prisma.token.deleteMany({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { saveToken, deleteToken };
};
