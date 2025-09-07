// Meeting Service for API calls
import { config } from '../config/environment.js';

const API_BASE_URL = config.API_BASE_URL;

export const meetingService = {
  // Test backend connection
  async testConnection() {
    try {
      // Extract base URL without /api for health check
      const baseUrl = API_BASE_URL.replace('/api', '');
      const healthCheckUrl = `${baseUrl}/`;
      
      console.log('Testing backend connection at:', healthCheckUrl);
      const response = await fetch(healthCheckUrl, {
        method: 'GET',
      });
      console.log('Backend health check response:', response.status);
      return response.ok;
    } catch (error) {
      console.log('Backend not available:', error.message);
      return false;
    }
  },
  // Schedule a new meeting
  async scheduleMeeting(meetingData) {
    try {
      const url = `${API_BASE_URL}/schedule-discovery-call`;
      console.log('Sending meeting data to API:', meetingData);
      console.log('API URL:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meetingData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Meeting scheduled successfully:', result);
      return result;
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      throw error;
    }
  },

  // Get available time slots for a specific date
  async getAvailableTimeSlots(date) {
    try {
      const url = `${API_BASE_URL}/available-slots?date=${date}`;
      console.log('Fetching time slots from:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching available time slots:', error);
      // Return default time slots if API fails
      return [
        '07:30 PM',
        '08:00 PM', 
        '09:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM'
      ];
    }
  },

  // Get meeting details by ID
  async getMeetingDetails(meetingId) {
    try {
      const response = await fetch(`${API_BASE_URL}/meetings/${meetingId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching meeting details:', error);
      throw error;
    }
  },

  // Cancel a meeting
  async cancelMeeting(meetingId) {
    try {
      const response = await fetch(`${API_BASE_URL}/meetings/${meetingId}/cancel`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error canceling meeting:', error);
      throw error;
    }
  }
};

export default meetingService;
