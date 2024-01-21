// ApiService.js
import config from '../config/local';// Modifiez cela en fonction de votre environnement

class RoomApiService {
  static getAvailableRooms(callback) {
    const eventSource = new EventSource(`${config.apiEndpoint}/rooms/available`);

    eventSource.onmessage = (event) => {
      // Parse the JSON data from the event
      const eventData = JSON.parse(event.data);

      // Call the callback function with the parsed data
      callback(eventData);
    };

    eventSource.onerror = (error) => {
      console.error("Error with SSE:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }
}

export default RoomApiService;
