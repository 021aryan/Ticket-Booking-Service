//booking
  const seatsToBook = [1, 2, 3]; // Replace with the actual seat IDs to be booked
const userName = 'John Doe'; // Replace with the user's name
const phoneNumber = '123-456-7890'; // Replace with the user's phone number

const bookingData = {
  seats: seatsToBook,
  name: userName,
  phone: phoneNumber,
};

fetch('/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(bookingData),
})
  .then(response => response.json())
  .then(booking => {
    // `booking` contains the details of the newly created booking,
    // including the booking ID and the total amount of the booking
    console.log(`Booking created successfully! Booking ID: ${booking.id}, Total amount: ${booking.amount}`);
  })
  .catch(error => {
    console.error('Error creating booking:', error);
  });
