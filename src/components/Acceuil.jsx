import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailUser from "./DetailUser";
import ListPosts from "./ListPosts";
import ListUser from "./ListUser";

export default function Acceuil() {
	return (
		<div>
			<nav>
				<h1>Gestion des Posts</h1>
			</nav>
			<Routes>
				<Route path="/" element={<ListUser />} />
				<Route path="/detailUser/:id" element={<DetailUser />} />
				<Route path="/listPosts/:id" element={<ListPosts />} />
			</Routes>
		</div>
	);
}
