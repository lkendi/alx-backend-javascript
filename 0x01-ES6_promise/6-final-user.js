import signupUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName){

    const signupUserPromise = signupUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    Promise.allSettled([signupUserPromise])
    .then(() => {
        return [
            {
                status: signupUserPromise.status,
                value: signupUserPromise.value,
            },

            {
                status: uploadPhotoPromise.status,
                value: uploadPhotoPromise.value,
            },
        ]
    })
    .catch(new Error());
}