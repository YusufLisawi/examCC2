import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/UserSlice";
import User from "./User";

export default function ListUser() {
	const listUsers = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<>
			<h1 style={{ margin: "1rem" }}>Liste des utilisateur:</h1>
			<div className="ListUser">
				{listUsers.loading ? (
					<div>
						<h1>Chargement...</h1>
					</div>
				) : listUsers.error ? (
					<div>
						<h2>{listUsers.error}</h2>
					</div>
				) : (
					listUsers.users.map((user) => (
						<User
							key={user.id}
							id={user.id}
							nom={user.lastName}
							prenom={user.firstName}
							image={user.image}
						/>
					))
				)}
			</div>
		</>
	);
}
