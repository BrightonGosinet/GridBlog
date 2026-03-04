/*
TODO (Header.jsx):
Create the entire Header component.

Requirements:
- Show the site title and a one-sentence description.
- Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
    return (
        <header className="header">
            <h1>GridBlog</h1>
            <div className="stats">
                <span>Posts: {totalPosts} </span>
                <span>Likes: {totalLikes} </span>
                <span>Dislikes: {totalDislikes} </span>
            </div>
        </header>
    );
}
