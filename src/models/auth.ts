/**
 * OAuth2 token authorization response.
 */
export type AuthorizationToken = {
  access_token: string;
  token_type: "bearer";
  scope: string;
};
