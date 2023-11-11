/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/sign_up": {
    /**
     * SIGN-001 サインアップ
     * @deprecated
     */
    get: {
      responses: {
        /** @description 成功 */
        201: {
          content: never;
        };
        /** @description Bad Request. */
        400: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["400"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Unauthorized. */
        401: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["401"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Internal Server Error */
        500: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["500"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Service Unavailable */
        503: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["503"]["content"]["application/json"]["schema"];
          };
        };
      };
    };
  };
  "/sign_in": {
    /** SIGN-002 サインイン */
    get: {
      responses: {
        /** @description 成功 */
        201: {
          content: never;
        };
        400: paths["/sign_up"]["get"]["responses"]["400"];
        401: paths["/sign_up"]["get"]["responses"]["401"];
        500: paths["/sign_up"]["get"]["responses"]["500"];
        503: paths["/sign_up"]["get"]["responses"]["503"];
      };
    };
  };
  "/sign_out": {
    /** SIGN-003 サインアウト */
    get: {
      responses: {
        /** @description 成功 */
        201: {
          content: never;
        };
        400: paths["/sign_up"]["get"]["responses"]["400"];
        401: paths["/sign_up"]["get"]["responses"]["401"];
        500: paths["/sign_up"]["get"]["responses"]["500"];
        503: paths["/sign_up"]["get"]["responses"]["503"];
      };
    };
  };
  "/user": {
    /** USER-001 ユーザー情報取得 */
    get: {
      responses: {
        /** @description 成功 */
        200: {
          content: {
            "application/json": {
              /**
               * @description ユーザーID
               * @example 1
               */
              userId: number;
              /**
               * @description ノードID
               * @example 1
               */
              nodeId: number;
              /**
               * @description ユーザー名
               * @example ユーザー名
               */
              name: string;
              /**
               * Format: email
               * @description メールアドレス
               * @example example@gmail.com
               */
              mailAddress?: string;
              /**
               * Format: date-time
               * @description 作成日
               */
              createdAt: string;
              /**
               * Format: date-time
               * @description 更新日
               */
              updatedAt: string;
            };
          };
        };
        /** @description Bad Request. */
        400: {
          content: {
            "application/json": {
              /** @description 人間が読める形式の問題タイプの概要。エラーのタイトル。 */
              title: string;
              /** @description この問題の発生に固有の人間が読める説明。エラーの説明。 */
              detail: string;
              /** @description 問題の特定の発生を識別する URL 。 */
              instance: string;
              /**
               * ValidationError
               * @description Validation Error.
               */
              invalidParameters?: {
                  /** @description バリデーションエラーを判別するエラーコード。このコードは、fieldNameとは無関係で決まる。 */
                  code: Record<string, never>;
                  /** @description 人間が読めるバリデーションエラーの対象名。 */
                  fieldName: string;
                  /** @description 人間が読めるバリデーションエラーの理由。 */
                  reason: string;
                }[];
            };
          };
        };
        /** @description Unauthorized. */
        401: {
          content: {
            "application/json": {
              /**
               * @description 人間が読める形式の問題タイプの概要。エラーのタイトル。
               * @example Your request was unauthorized.
               */
              title: string;
              /**
               * @description この問題の発生に固有の人間が読める説明。エラーの説明。
               * @example about:blank
               */
              detail: string;
              /**
               * @description 問題の特定の発生を識別する URL 。
               * @example /example/401
               */
              instance: string;
            };
          };
        };
        /** @description Forbidden. */
        403: {
          content: {
            "application/json": {
              /**
               * @description 人間が読める形式の問題タイプの概要。エラーのタイトル。
               * @example Your request was forbidden.
               */
              title: string;
              /**
               * @description この問題の発生に固有の人間が読める説明。エラーの説明。
               * @example about:blank
               */
              detail: string;
              /**
               * @description 問題の特定の発生を識別する URL 。
               * @example /example/403
               */
              instance: string;
            };
          };
        };
        /**
         * @description Not Found.
         *
         * ユーザー情報が見つからなかった場合。
         */
        404: {
          content: {
            "application/json": {
              /**
               * @description 人間が読める形式の問題タイプの概要。エラーのタイトル。
               * @example Your request couldn't find user.
               */
              title: string;
              /**
               * @description この問題の発生に固有の人間が読める説明。エラーの説明。
               * @example about:blank
               */
              detail: string;
              /**
               * @description 問題の特定の発生を識別する URL 。
               * @example /example/404
               */
              instance: string;
            };
          };
        };
        /** @description Internal Server Error */
        500: {
          content: {
            "application/json": {
              /**
               * @description 人間が読める形式の問題タイプの概要。エラーのタイトル。
               * @example Server didn't understand.
               */
              title: string;
              /**
               * @description この問題の発生に固有の人間が読める説明。エラーの説明。
               * @example about:blank
               */
              detail: string;
              /**
               * @description 問題の特定の発生を識別するURL。
               * @example /example/500
               */
              instance: string;
            };
          };
        };
        /** @description Service Unavailable */
        503: {
          content: {
            "application/json": {
              /**
               * @description 人間が読める形式の問題タイプの概要。エラーのタイトル。
               * @example Service didn't Unavailable.
               */
              title: string;
              /**
               * @description この問題の発生に固有の人間が読める説明。エラーの説明。
               * @example about:blank
               */
              detail: string;
              /**
               * @description 問題の特定の発生を識別するURL。
               * @example /example/503
               */
              instance: string;
            };
          };
        };
      };
    };
  };
  "/todos": {
    /** TODO-001 Todo一覧取得 */
    get: {
      responses: {
        /** @description 成功 */
        200: {
          content: {
            "application/json": paths["/todos/%7Btodo_id%7D"]["get"]["responses"]["200"]["content"]["application/json"]["schema"][];
          };
        };
        /** @description Bad Request. */
        400: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["400"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Unauthorized. */
        401: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["401"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Forbidden. */
        403: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["403"]["content"]["application/json"]["schema"];
          };
        };
        /**
         * @description Not Found.
         *
         * 指定したTodoが見つからなかった場合。
         */
        404: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["404"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Internal Server Error */
        500: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["500"]["content"]["application/json"]["schema"];
          };
        };
        /** @description Service Unavailable */
        503: {
          content: {
            "application/json": paths["/user"]["get"]["responses"]["503"]["content"]["application/json"]["schema"];
          };
        };
      };
    };
    /** TODO-003 Todo作成 */
    post: {
      /** @description Todo情報 */
      requestBody: {
        content: {
          "application/json": {
            /** @example TodoタイトルTodoタイトルTodoタイトル */
            title: string;
            /**
             * @description Todo説明
             * @example Todo説明Todo説明Todo説明
             */
            description?: string;
            /**
             * Format: date
             * @description 対応期限
             */
            deadlineAt?: string;
          };
        };
      };
      responses: {
        /** @description Created. */
        201: {
          content: never;
        };
        400: paths["/todos"]["get"]["responses"]["400"];
        401: paths["/todos"]["get"]["responses"]["401"];
        403: paths["/todos"]["get"]["responses"]["403"];
        500: paths["/todos"]["get"]["responses"]["500"];
        503: paths["/todos"]["get"]["responses"]["503"];
      };
    };
  };
  "/todos/{todo_id}": {
    /** TODO-002 Todo取得 */
    get: {
      parameters: {
        path: {
          /**
           * @description TodoID
           * @example 1
           */
          todo_Id: number;
        };
      };
      responses: {
        /** @description 成功 */
        200: {
          content: {
            "application/json": {
              /**
               * @description TodoID
               * @example 1
               */
              id: number;
              /**
               * @description ユーザーID
               * @example 1
               */
              userId: number;
              /**
               * @description Todoタイトル
               * @example TodoタイトルTodoタイトルTodoタイトル
               */
              title: string;
              /**
               * @description Todo説明
               * @example Todo説明Todo説明Todo説明
               */
              description?: string;
              /**
               * Format: date
               * @description 対応期限
               */
              deadlineAt?: string;
              status: paths["/todos/%7Btodo_id%7D/status"]["put"]["requestBody"]["content"]["application/json"]["schema"]["status"];
              /**
               * Format: date-time
               * @description 作成日
               */
              createdAt: string;
              /**
               * Format: date-time
               * @description 更新日
               */
              updatedAt: string;
            };
          };
        };
        400: paths["/todos"]["get"]["responses"]["400"];
        401: paths["/todos"]["get"]["responses"]["401"];
        403: paths["/todos"]["get"]["responses"]["403"];
        404: paths["/todos"]["get"]["responses"]["404"];
        500: paths["/todos"]["get"]["responses"]["500"];
        503: paths["/todos"]["get"]["responses"]["503"];
      };
    };
    /** TODO-004 Todo更新 */
    put: {
      parameters: {
        path: {
          /**
           * @description TodoID
           * @example 1
           */
          todo_Id: number;
        };
      };
      requestBody: paths["/todos"]["post"]["requestBody"];
      responses: {
        /** @description No Content. */
        204: {
          content: never;
        };
        400: paths["/todos"]["get"]["responses"]["400"];
        401: paths["/todos"]["get"]["responses"]["401"];
        403: paths["/todos"]["get"]["responses"]["403"];
        404: paths["/todos"]["get"]["responses"]["404"];
        500: paths["/todos"]["get"]["responses"]["500"];
        503: paths["/todos"]["get"]["responses"]["503"];
      };
    };
    /** TODO-005 Todo削除 */
    delete: {
      parameters: {
        path: {
          /**
           * @description TodoID
           * @example 1
           */
          todo_Id: number;
        };
      };
      responses: {
        204: paths["/todos/%7Btodo_id%7D"]["put"]["responses"]["204"];
        400: paths["/todos"]["get"]["responses"]["400"];
        401: paths["/todos"]["get"]["responses"]["401"];
        403: paths["/todos"]["get"]["responses"]["403"];
        404: paths["/todos"]["get"]["responses"]["404"];
        500: paths["/todos"]["get"]["responses"]["500"];
        503: paths["/todos"]["get"]["responses"]["503"];
      };
    };
    parameters: {
      path: {
        /**
         * @description TodoID
         * @example 1
         */
        todo_Id: number;
      };
    };
  };
  "/todos/{todo_id}/status": {
    /** TODO-006 Todo状態更新 */
    put: {
      parameters: {
        path: {
          /**
           * @description TodoID
           * @example 1
           */
          todo_Id: number;
        };
      };
      /** @description Todo状態 */
      requestBody: {
        content: {
          "application/json": {
            /**
             * @description 対応状態。
             *
             * "TODO": 未着手。
             * "WIP": 対応中。
             * "DONE": 完了。
             * @enum {string}
             */
            status: "TODO" | "WIP" | "DONE";
          };
        };
      };
      responses: {
        204: paths["/todos/%7Btodo_id%7D"]["put"]["responses"]["204"];
        400: paths["/todos"]["get"]["responses"]["400"];
        401: paths["/todos"]["get"]["responses"]["401"];
        403: paths["/todos"]["get"]["responses"]["403"];
        404: paths["/todos"]["get"]["responses"]["404"];
        500: paths["/todos"]["get"]["responses"]["500"];
        503: paths["/todos"]["get"]["responses"]["503"];
      };
    };
    parameters: {
      path: {
        /**
         * @description TodoID
         * @example 1
         */
        todo_Id: number;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
