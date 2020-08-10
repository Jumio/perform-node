# Jumio Perform API Node.js SDK [Beta]

Welcome to Jumio's official Node.js SDK for the Perform Netverify API. 

Please refer to the [Perform Netverify API Integration Guide](https://github.com/Jumio/implementation-guides/blob/master/netverify/performNetverify.md#request-body) for 
detailed information on required verification parameters and allowed values.

*This project is currently in Beta phase.*

## Installation

The SDK can be added as a dependency to your Node.js project using either

    yarn add @jumio/perform-node

or

    npm i @jumio/perform-node
    
## Integration

Please refer to the Example Integration below for details on how to integrate the SDK into your Node.js project and to perform a verification.
    
## Example Integration

An example integration can be found in the [Perform Node Code Repo.](https://github.com/Jumio/perform-node)

In order to configure the sample code and perform a verification:

1. [Clone the repository](https://github.com/Jumio/perform-node) to a local directory
2. Run <code>npm install</code>
3. Take a look at the sample integration code in <code>./example/index.ts</code>
4. Copy <code>./example/config.skel.ts</code> to <code>./example/config.ts</code> and populate with your own API credentials and user agent 
5. Execute <code>npm run example</code>
6. Once complete, the outcome of the verification will be logged to the console
