export const getblogs = () => {
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs');

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}