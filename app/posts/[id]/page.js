
const BlogDetails = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const details = await res.json();

    return (
        <div className="max-w-screen-sm mx-auto">
            <h2 className="text-2xl font-semibold mb-3">{details.title}</h2>

            <p>{details.body}</p>
        </div>
    );
};

export default BlogDetails;