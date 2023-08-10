import { useRef } from "react";
import "./style.scss";
import ListItem from "../UI/List/ListItem";

const index = ({ setModal, setContact, contact }) => {
	const nameRef = useRef("");
	const numRef = useRef("");


	function addContact() {
		const newContact = {
			id: Date.now(),
			name: nameRef.current.value,
			number: numRef.current.value,
		};
		console.log(numRef.current.value);
		console.log(nameRef.current.value);
		setContact([...contact , newContact]);

		console.log(newContact);
		setModal(false);

	}

	return (
		<div className="modalBack">
			<div className="modalContainer">
				<button className="closeBtn" onClick={() => setModal(false)}>
					X
				</button>
				<div className="title">
					<h1>Add New Contact</h1>
				</div>
				<div className="body">
					<input
						ref={numRef}
						className="number"
						type="number"
						placeholder="Phone number"
					/>
					<input
						ref={nameRef}
						className="name"
						type="text"
						placeholder="Enter full name"
					/>
				</div>
				<div className="footer">
					<button className="cancel" onClick={() => setModal(false)}>
						Cancel
					</button>
					<button onClick={() => addContact()} className="add">
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default index;
