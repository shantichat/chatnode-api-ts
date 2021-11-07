/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/state": {
    /** Information about server parameters. Can be used as ping */
    get: operations["getServerState"];
  };
  "/api/v1/users": {
    get: operations["getUsers"];
  };
  "/api/v1/users/{userUid}": {
    get: operations["getUserInfo"];
  };
  "/api/v1/users/me": {
    get: operations["getMyInfo"];
  };
  "/api/v1/invites/": {
    /** Used and unused invitation codes */
    get: operations["getInvites"];
  };
}

export interface components {
  schemas: {
    /** Part of Base schema with uid, created_at and updated_at */
    BaseEntity: {
      uid: string;
      created_at: string;
      updated_at: string;
    };
    /** Deleted object */
    DeletedEntity: {
      uid: string;
      updated_at: string;
      deleted: boolean;
    };
    User: Partial<components["schemas"]["DeletedEntity"]> &
      Partial<
        components["schemas"]["BaseEntity"] & {
          name?: string;
          timezone?: string;
          ext?: {
            icon?: string;
            bot?: string;
          };
        }
      >;
    Invite: {
      code: string;
      created_at: string;
      used_at?: string;
      invitee?: string;
    };
  };
  parameters: {
    userUid: string;
  };
}

export interface operations {
  /** Information about server parameters. Can be used as ping */
  getServerState: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": {
            time?: string;
            extensions?: string[];
          };
        };
      };
    };
  };
  getUsers: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"][];
        };
      };
    };
  };
  getUserInfo: {
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
  getMyInfo: {
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
  getInvites: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Invite"];
        };
      };
    };
  };
}

export interface external {}
