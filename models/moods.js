module.exports = (mongoose) => {
    const moodSchema = mongoose.Schema({
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
          });
  
    return mongoose.model('moods', moodSchema);
  };