export enum Region {
  US = 'US',
  EU = 'EU',
  SGP = 'SGP'
}

interface Host {
  region: Region;
  name: string;
}

export const hosts: Host[] = [
  {
    region: Region.US,
    name: 'netverify.com'
  },
  {
    region: Region.EU,
    name: 'lon.netverify.com'
  },
  {
    region: Region.SGP,
    name: 'core-sgp.jumio.com'
  }
];

export const requestOpts = {
  path: '/api/netverify/v2/performNetverify',
  port: 443,
  method: 'POST',
  headers: {
    accept: 'application/json',
    contentType: 'application/json',
    auth: 'Basic'
  }
};
