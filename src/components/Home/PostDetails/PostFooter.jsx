import React, { useState } from "react";
import icons from "./icons";

export default function PostFooter() {
	const [liked, setliked] = useState(false);
	const [bookmart, setbookmart] = useState(false);

	return (
		<div className="post_footer overflow-hidden">
			<div className="post_icons d-flex align-items-center p-3">
				<div
					className="mr-3 like_icon"
					onClick={() => setliked(!liked)}
				>
					{liked ? icons.liked : icons.unliked}
				</div>
				<div className="mr-3 comment_icon">{icons.comment}</div>
				<div className="share_icon">{icons.share}</div>
				<div
					className="bookmark_icon ml-auto"
					onClick={() => setbookmart(!bookmart)}
				>
					{bookmart ? icons.unsaved : icons.saved}
				</div>
			</div>
			<div className="count_likes_views p-3">12,345 likes</div>
		</div>
	);
}
