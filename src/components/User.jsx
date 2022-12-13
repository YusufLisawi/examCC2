import React from "react";
import { Link } from "react-router-dom";

export default function User({ id, nom, prenom, image }) {
	return (
		<div className="user">
			<img src={image} alt={nom} />
			<h2>
				{nom} {prenom}
			</h2>
			<Link to={`detailUser/${id}`}>
				<button>Detail User</button>
			</Link>
			<Link to={`listPosts/${id}`}>
				<button>Liste des posts</button>
			</Link>
		</div>
	);
}
