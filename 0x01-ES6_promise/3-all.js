import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {

  Promise.all([uploadPhoto(), createUser()])
    .then((uploadPhotoResponse, createUserResponse) => {
      console.log(`${uploadPhotoResponse.body} ${createUserResponse.firstName} ${createUserResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
