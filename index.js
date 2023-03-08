//get seats
fetch('/seats')
  .then(response => response.json())
  .then(seats => {
    // `seats` contains an array of all the seats
    // sorted by seat class and with a boolean `is_booked` property
    console.log(seats);
  })
  .catch(error => {
    console.error('Error fetching seats:', error);
  });
