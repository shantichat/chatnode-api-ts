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
    /** Users lookup */
    get: operations["getUsers"];
  };
  "/api/v1/users/{userUid}": {
    /** Full information about user */
    get: operations["getUserInfo"];
  };
  "/api/v1/users/me": {
    /** Full information about self */
    get: operations["getMyInfo"];
  };
  "/api/v1/invites/": {
    /** Used and unused invitation codes */
    get: operations["getInvites"];
  };
}

export interface components {
  schemas: {
    BaseEntity: {
      uid: string;
      created_at: string;
      updated_at: string;
    };
    DeletedEntity: {
      uid: string;
      updated_at: string;
      deleted: boolean;
    };
    User: Partial<
      components["schemas"]["BaseEntity"] & {
        name: string;
        timezone?: string;
        ext?: {
          icon?: string;
          bot?: string;
        };
      }
    > &
      Partial<components["schemas"]["DeletedEntity"]>;
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
  /** Users lookup */
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
  /** Full information about user */
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
  /** Full information about self */
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
