import {  createClient, type ClientConfig } from "@sanity/client";


const config: ClientConfig = {
  projectId: "upgqio2c",
  dataset: "recipes",
  apiVersion: '2023-04-26',
  useCdn: true,
}
const client = createClient(config);

export default client;