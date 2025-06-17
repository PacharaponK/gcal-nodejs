# Google Calendar Events Fetcher

A Node.js application that fetches and displays events from a Google Calendar using the Google Calendar API.

## Features

- Fetches all events from a specified Google Calendar
- Supports pagination to handle large numbers of events
- Displays event details including summary, start time, and end time
- Handles both all-day events and timed events

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Google Cloud Platform account with Calendar API enabled
- Google Calendar API credentials

## Setup

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd gcal-nodejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Google Calendar API key and Calendar ID
   ```env
   GOOGLE_CALENDAR_API_KEY=your_api_key_here
   GOOGLE_CALENDAR_ID=your_calendar_id_here
   ```

## Getting Google Calendar API Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Create API credentials (API key)
5. Get your Calendar ID from Google Calendar settings

## Usage

Run the application:

```bash
node index.js
```

The application will fetch and display all events from the specified Google Calendar.

## Output

The application will display:
- Total number of events found
- For each event:
  - Event number
  - Event summary (title)
  - Start date/time
  - End date/time

## Dependencies

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests to the Google Calendar API
- [dotenv](https://www.npmjs.com/package/dotenv): For loading environment variables from a .env file

## License

ISC
