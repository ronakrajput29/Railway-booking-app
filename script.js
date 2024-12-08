async function addTrain(trainNumber, source, destination, totalSeats) {
  try {
      const [result] = await pool.query('INSERT INTO trains (train_number, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)', [trainNumber, source, destination, totalSeats, totalSeats]);
      console.log('Train added successfully:', result.insertId);
  } catch (error) {
      console.error('Error adding train:', error);
  }
}