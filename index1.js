//get seat pricing
  fetch('/seats/' + seatId)
  .then(response => response.json())
  .then(seat => {
    // `seat` contains the details of the requested seat
    // and the pricing based on the seat class and previous bookings
    const seatClass = seat.class;
    const bookings = seat.bookings;
    let pricing;

    // Calculate the percentage of seats booked for the seat class
    const bookedSeats = bookings.filter(booking => booking.seat_class === seatClass).length;
    const totalSeats = bookings.length;
    const percentageBooked = (bookedSeats / totalSeats) * 100;
    // Determine the pricing based on the percentage of seats booked
    if (percentageBooked < 40) {
      pricing = seat.min_price || seat.normal_price;
    } else if (percentageBooked >= 40 && percentageBooked <= 60) {
      pricing = seat.normal_price || seat.max_price;
    } else {
      pricing = seat.max_price || seat.normal_price;
    }

    // Log the seat details and pricing
    console.log(`Seat ${seatId} (${seatClass}): ${pricing}`);
  })
  .catch(error => {
    console.error(`Error fetching seat ${seatId} pricing:`, error);
  });
