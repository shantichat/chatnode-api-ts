/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/state/": {
    /** Information about server parameters. Alse can be used as ping */
    get: operations["getServerState"];
  };
  "/api/v1/users/": {
    /** Users lookup */
    get: operations["getUserList"];
  };
  "/api/v1/users/{userUid}/": {
    /** Full information about user */
    get: operations["getUser"];
  };
  "/api/v1/users/me/": {
    /** Full information about self */
    get: operations["getMe"];
  };
  "/api/v1/invites/": {
    /** Used and unused invitation codes */
    get: operations["getInviteList"];
    post: operations["createInvite"];
  };
  "/api/v1/invites/{inviteUid}/": {
    /** Used and unused invitation codes */
    get: operations["getInvite"];
  };
  "/api/v1/invites/preview/": {
    /** Information about invitation accectablility and invitee */
    post: operations["previewInvite"];
  };
  "/api/v1/invites/accept/": {
    /** Information about invitation accectablility and invitee */
    post: operations["acceptInvite"];
  };
}

export interface components {
  schemas: {
    BaseEntity: {
      uid: string;
      created_at: components["schemas"]["ISODateTime"];
      updated_at: components["schemas"]["ISODateTime"];
    };
    DeletedEntity: {
      uid: string;
      updated_at: components["schemas"]["ISODateTime"];
      deleted: boolean;
    };
    User: Partial<
      components["schemas"]["BaseEntity"] & {
        username?: string;
        name: string;
        icon: string;
        timezone?: string;
        ext?: {
          bot?: boolean;
        };
      }
    > &
      Partial<components["schemas"]["DeletedEntity"]>;
    Invite: Partial<
      components["schemas"]["BaseEntity"] &
        ({
          code: components["schemas"]["InviteCode"];
          used_at?: components["schemas"]["ISODateTime"];
          invitee?: components["schemas"]["User"];
        } & {
          created_at: unknown;
        })
    > &
      Partial<components["schemas"]["DeletedEntity"]>;
    InviteCode: string;
    InvitePreview: {
      inviter?: components["schemas"]["User"];
      is_used?: boolean;
      required?: unknown;
    };
    ISODateTime: string;
  };
  parameters: {
    userUid: string;
  };
}

export interface operations {
  /** Information about server parameters. Alse can be used as ping */
  getServerState: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": {
            time: components["schemas"]["ISODateTime"];
            extensions: string[];
          };
        };
      };
    };
  };
  /** Users lookup */
  getUserList: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"][];
        };
      };
    };
  };
  /** Full information about user */
  getUser: {
    parameters: {
      path: {
        userUid: components["parameters"]["userUid"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  /** Full information about self */
  getMe: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  /** Used and unused invitation codes */
  getInviteList: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Invite"][];
        };
      };
    };
  };
  createInvite: {
    responses: {
      /** OK */
      201: {
        content: {
          "application/json": components["schemas"]["Invite"];
        };
      };
    };
  };
  /** Used and unused invitation codes */
  getInvite: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Invite"];
        };
      };
    };
  };
  /** Information about invitation accectablility and invitee */
  previewInvite: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["InvitePreview"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": {
          code: components["schemas"]["InviteCode"];
        };
      };
    };
  };
  /** Information about invitation accectablility and invitee */
  acceptInvite: {
    responses: {
      /** Already logged in */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** User created */
      201: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": {
          code: components["schemas"]["InviteCode"];
          username: string;
          name?: string;
          password: string;
        };
      };
    };
  };
}

export interface external {}
