import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailUser() {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		const getUser = async () => {
			setLoading(true);
			const data = await axios
				.get(`https://dummyjson.com/users/${id}`)
				.then((res) => res.data);
			setLoading(false);
			setUser(data);
		};

		getUser();
	}, []);

	return (
		<div className="details">
			{loading ? (
				<h1 style={{ textAlign: "center" }}>Loading...</h1>
			) : (
				<div className="detailUser">
					<img src={user.image} alt={user.nom} />
					<div>
						<h3>
							{user.firstName} {user.lastName} <br /> {user.age}{" "}
							ans | {user.gender}
						</h3>
						<p>
							Email: {user.email} <br />
							Phone : {user.phone} <br />
							Poids : {user.weight} kg <br />
							Hauteur : {user.height} cm <br />
							Date de naissance : {user.birthDate} <br />
							Group sanguine : {user.bloodGroup} <br />
							Couleur de l'oeil : {user.eyeColor} <br />
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
