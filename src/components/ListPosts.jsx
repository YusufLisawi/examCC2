import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "../redux/PostsSlice";

export default function ListPosts() {
	const listPosts = useSelector((state) => state.posts);
	const { id } = useParams();
	const [listPostUser, setListPostUser] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
		setListPostUser(
			listPosts.posts.posts.filter((post) => post.userId == id)
		);
	}, []);
	console.log("listPostUser: ", listPostUser);
	return (
		<>
			<h1 style={{ margin: "1rem" }}>Liste des posts:</h1>
			<div className="ListPosts">
				{listPosts.loading ? (
					<div>
						<h1>Chargement...</h1>
					</div>
				) : listPosts.error ? (
					<div>
						<h2>{listPosts.error}</h2>
					</div>
				) : (
					<>
						{listPostUser.map((post) => (
							<div className="post">
								<h2>{post.title}</h2>
								<p>{post.body}</p>
								<span id="tags">
									Tags :{" "}
									{post.tags.map((e) => (
										<span>{e} </span>
									))}
								</span>
							</div>
						))}
					</>
				)}
			</div>
		</>
	);
}
