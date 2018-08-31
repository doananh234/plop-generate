export const uploadPhoto = data => {
  return new Promise(resolve => {
    if (data instanceof File) {
      fetch('https://api.imgur.com/3/image', {
        method: 'post',
        headers: {
          Authorization: 'Client-ID 50b73e2dc3f6fb5',
        },
        body: data,
      })
        .then(response => response.json())
        .then(response => {
          resolve(response.data ? response.data.link : '');
        });
    } else {
      resolve(null);
    }
  }).catch(err => {
    console.log(err);
  });
};
