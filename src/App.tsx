import { useState } from "react";
import "./App.css";

const fetchPosts = async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		return data.slice(0, 5); // Load only first 5 posts
	} catch (error) {
		console.error("Error:", error);
	}
};

function App() {
	const [posts, setPosts] = useState<{ title: string; body: string }[]>([]);

	return (
		<div className="text-start flex flex-col gap-4 items-start">
			<h1 className="text-3xl font-bold">React App with Tailwind CSS</h1>
			<button
				className="border rounded bg-fuchsia-500 hover:bg-fuchsia-500/50 px-4 py-2 cursor-pointer"
				onClick={() => fetchPosts().then(setPosts)}
			>
				Fetch Posts
			</button>
			<ul className="flex flex-col items-start gap-4">
				{posts.map((post, index) => (
					<li className="flex flex-col gap-2 items-start" key={index}>
						<h2 className="first-letter:uppercase text-lg font-bold">{post.title}</h2>
						<p className="font-light">{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
