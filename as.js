async function bookTicket(userId, trainId, numSeats) {
  try {
      // Check seat availability
      const [train] = await pool.query('SELECT available_seats FROM trains WHERE id = ?', [trainId]);
      if (train[0].available_seats < numSeats) {
          console.log('Insufficient seats available');
          return;
      }

      // Book the ticket
      await pool.query('INSERT INTO bookings (user_id, train_id, booking_date, num_seats) VALUES (?, ?, NOW(), ?)', [userId, trainId, numSeats]);
      await pool.query('UPDATE trains SET available_seats = available_seats - ? WHERE id = ?', [numSeats, trainId]);
      console.log('Ticket booked successfully');
  } catch (error) {
      console.error('Error booking ticket:', error);
  }
}