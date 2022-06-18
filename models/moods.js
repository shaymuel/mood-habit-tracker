module.exports = (mongoose) => {
  const Moods = mongoose.model(
    'Moods',
    mongoose.Schema({
      moodName: {
        type: String
      },
      moodDescription: {
        type: String
      },
      moodColor: {
        type: String
      },
      moodEmoji: {
        type: String
      }
    })
  );

  return Moods;
};