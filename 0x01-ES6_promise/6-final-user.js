import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signupUser(firstName, lastName)

      .then((user) => ({ status: 'fulfilled', value: user }))
      .catch((error) => ({ status: 'rejected', value: error })),
    uploadPhoto(fileName)
      .then((photo) => ({ status: 'fulfilled', value: photo }))
      .catch((error) => ({ status: 'rejected', value: error })),
  ]);
}
