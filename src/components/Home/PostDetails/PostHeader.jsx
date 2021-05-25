export default function PostHeader() {
	return (
		<div className="post_header p-3 d-flex justify-content-between align-items-center">
			<div className="d-flex align-items-center">
				<img
					className="rounded-circle"
					src="http://placehold.it/35x35"
					width="35"
					height="35"
					alt="user_image"
				/>
				<p className="m-0 ml-3">username</p>
			</div>

			<svg
				aria-label="More options"
				className="_8-yf5 "
				fill="#262626"
				height="16"
				viewBox="0 0 48 48"
				width="16"
			>
				<circle cx="8" cy="24" r="4.5"></circle>
				<circle cx="24" cy="24" r="4.5"></circle>
				<circle cx="40" cy="24" r="4.5"></circle>
			</svg>
		</div>
	);
}
