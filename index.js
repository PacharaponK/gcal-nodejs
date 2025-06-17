require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
const calendarId = process.env.GOOGLE_CALENDAR_ID;
const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`;

// Function to fetch all pages of events
async function fetchAllEvents(pageToken = null, allEvents = []) {
    const params = {
        key: apiKey,
        singleEvents: true,
        orderBy: 'startTime',
        maxResults: 2500, // Maximum allowed by Google Calendar API
    };

    if (pageToken) {
        params.pageToken = pageToken;
    }

    try {
        const response = await axios.get(url, { params });
        const events = response.data.items || [];
        allEvents = allEvents.concat(events);

        if (response.data.nextPageToken) {
            return fetchAllEvents(response.data.nextPageToken, allEvents);
        }

        return allEvents;
    } catch (error) {
        console.error('Error fetching events:', error.response?.data || error.message);
        throw error;
    }
}

// Fetch all events
fetchAllEvents()
    .then(events => {
        if (events.length === 0) {
            console.log('ไม่พบกิจกรรมในปฏิทิน');
            return;
        }

        console.log(`พบทั้งหมด ${events.length} กิจกรรม:`);
        events.forEach((event, index) => {
            const start = event.start.dateTime || event.start.date;
            const end = event.end.dateTime || event.end.date;
            console.log(`\n${index + 1}. ${event.summary || 'ไม่มีชื่อกิจกรรม'}`);
            console.log(`   เริ่ม: ${start}`);
            console.log(`   สิ้นสุด: ${end}`);
            if (event.description) {
                console.log(`   รายละเอียด: ${event.description.substring(0, 100)}${event.description.length > 100 ? '...' : ''}`);
            }
        });
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาด:', error.response?.data || error.message);
    });
