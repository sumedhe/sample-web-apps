const oidcConfig = {
  authority: process.env.NEXT_PUBLIC_OIDC_AUTHORITY,
  client_id: process.env.NEXT_PUBLIC_OIDC_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_OIDC_REDIRECT_URI,
  response_type: process.env.NEXT_PUBLIC_OIDC_RESPONSE_TYPE,
  scope: process.env.NEXT_PUBLIC_OIDC_SCOPE,
  post_logout_redirect_uri: process.env.NEXT_PUBLIC_OIDC_POST_LOGOUT_REDIRECT_URI,
  silent_redirect_uri: process.env.NEXT_PUBLIC_OIDC_SILENT_REDIRECT_URI,
};
  
export default oidcConfig;
