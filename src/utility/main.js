import toast from 'react-hot-toast';



export const getblog = () => {
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs');

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}


export const saveBlog = blog => {
    let blogs = getblog();

    const isExist = blogs.find(b => b.id === blog.id);

    if (isExist) {
        return toast.error("Already Bookmarked");
    }

    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Bookmarked Successfully!')

}



export const deleteBlog = id => {
    let blogs = getblog();

    const remaining = blogs.filter(b => b.id !== id);

    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog Remove From Bookmark')

}