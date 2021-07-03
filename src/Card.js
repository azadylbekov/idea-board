import { BsXCircle } from "react-icons/bs";

function Card({ title, text, handleContentEditable, id, handleDelete }) {
	return (
		<div className='sticker-card'>
			<h3
				contentEditable={true}
				suppressContentEditableWarning={true}
				data-name="title"
				onBlur={(e) => handleContentEditable(e, id)}
			>{title}</h3>
			<p
				contentEditable={true}
				suppressContentEditableWarning={true}
				data-name="text"
				onBlur={(e) => handleContentEditable(e, id)}
			>{text}</p>
			<button
				className='close-btn'
				onClick={() => handleDelete(id)}
			><BsXCircle /></button>
		</div>
	)
}

export default Card