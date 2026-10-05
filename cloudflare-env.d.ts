export namespace Cloudflare {
  export interface Env {
    DB?: D1Database;
    BID_FEED_KEY?: string;
    BID_FEED_MASTER_EMAIL?: string;
    BUCKET?: R2Bucket;
    OPENAI_API_KEY?: string;
    AI_MODEL?: string;
    XERO_CLIENT_ID?: string;
    XERO_CLIENT_SECRET?: string;
    XERO_REDIRECT_URI?: string;
    XERO_TOKEN_ENCRYPTION_KEY?: string;
    XERO_SCOPES?: string;
  }
}
