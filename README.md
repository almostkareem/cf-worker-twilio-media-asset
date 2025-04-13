# Cloudflare Worker for Twilio Media Assets

This repository contains a simple Cloudflare Worker script that fetches Twilio media assets using basic authentication.

## Features

- Fetches media assets from a given URL (`mu` query parameter).
- Uses Twilio Account SID and Auth Token for authentication.
- Returns the media asset with appropriate headers (e.g., `Content-Type`, `Content-Length`).
- Handles errors gracefully with meaningful HTTP status codes and JSON responses.

## Usage

### Environment Variables

The script requires the following environment variables to be set:

- `SID`: Your Twilio Account SID.
- `TOKEN`: Your Twilio Auth Token.

### Query Parameters

- `mu`: The media URL to fetch.

### Example Request 
```bash
curl -X GET "https://<your-worker-url>/?mu=https://api.twilio.com/2010-04-01/Accounts/<AccountSID>/Messages/<MessageSID>/Media/<MediaSID>" \
    -H "Content-Type: application/json"
```

Replace `<your-worker-url>`, `<AccountSID>`, `<MessageSID>`, and `<MediaSID>` with your actual values.
