#!/usr/bin/env node

import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const serverURL = process.env.CI_SERVER_URL;
const token = process.env.API_ACCESS_TOKEN;
const projectId = process.env.CI_MERGE_REQUEST_PROJECT_ID;
const mergeRequestId = process.env.CI_MERGE_REQUEST_IID;

const [body] = process.argv.slice(2);

const mergeRequestNotesURL = `${serverURL}/api/v4/projects/${projectId}/merge_requests/${mergeRequestId}/notes`;

try {
  const response = await fetch(mergeRequestNotesURL, {
    method: "POST",
    body: JSON.stringify({
      id: "chromatic",
      merge_request_iid: 173,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      "PRIVATE-TOKEN": token,
    },
  });
  await response.json();
  console.log({
    serverURL,
    projectId,
    mergeRequestId,
  });
  console.log("you have posted a comment: ", body);
} catch (error) {
  console.error(error);
}
