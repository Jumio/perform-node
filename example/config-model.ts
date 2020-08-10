/**
 * Configuration required to run the example integration.
 */
export interface Config {
  /**
   * Your Perform API token
   */
  apiToken: string;
  /**
   * Your Perform API secret
   */
  apiSecret: string;
  /**
   * Your Perform user-agent (required for troubleshooting)
   */
  userAgent: string;
  /**
   * Specific host to send API requests to, for testing purposes. Overrides the default production hosts in each region.
   * (Optional)
   */
  hostname?: string;
}
