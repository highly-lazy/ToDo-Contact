const ListItem = ({ id, name, number, num, deleteTodo }) => {
	return (
		<li className="list bg-white my-2 p py-2 flex items-center justify-between rounded-lg">
			<span className="bg-green-600 w-7 h-7 grid text-white place-content-center text-xl rounded-full m-1">
				{num + 1}
			</span>

			<h2>{name}</h2>
			<h2>{number}</h2>

			<button
				onClick={() => deleteTodo(id)}
				className="bg-red-500 px-3 py-2 m-2 rounded-lg text-white active:bg-green-700"
			>
				Delete Contact
			</button>
		</li>
	);
};

export default ListItem;
