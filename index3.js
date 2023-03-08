 //retrieve bookings
  const userIdentifier = 'user@example.com'; // Replace with the user's email or phone number

if (!userIdentifier) {
  console.error('Error: No user identifier provided');
  return;
}

fetch(`/bookings?userIdentifier=${encodeURIComponent(userIdentifier)}`)
  .then(response => response.json())
  .then(bookings => {
    // `bookings` contains an array of all bookings created by the user
    console.log(`Bookings found: ${bookings.length}`);
    console.log(bookings);
  })
  .catch(error => {
    console.error('Error retrieving bookings:', error);
  });
