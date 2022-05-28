module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
              username: {
                type: String
              },
              email: {
                type: String
              },
              phoneNumber: {
                type: String
              },
              password: {
                type: String
              },
              habitTracker: {
                habits: {
                  type: [mongoose.SchemaTypes.Mixed]
                }
              },
              chosenMoods: {
                moods: {
                  type: [mongoose.SchemaTypes.Mixed]
                }
              }
          });
  
    return mongoose.model('users', userSchema);
  };