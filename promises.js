const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            posts.push(post);

            const err = Math.random() < 0.5;

            if (err) {
                reject('Something went wrong!');
            } else {
                resolve();
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<div>${post.title}</div>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

getPosts();
createPost({ title: 'Post three', body: 'This is post three' })
    .then(getPosts)
    .catch(err => {
        console.log(err);
    });
