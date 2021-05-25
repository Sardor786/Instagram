import Skeleton from "react-loading-skeleton";

export default function PostSkleton() {
	return (
		<div
			className="post_wrapper border my-4 rounded"
			style={{ width: "614px" }}
		>
			<div className="post_header p-3 d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center">
					<Skeleton circle={true} width="35px" height="35px" />
					<p className="m-0 ml-3">
						<Skeleton
							width="100px"
							height="18px"
							style={{ marginTop: "10px" }}
						/>
					</p>
				</div>

				<Skeleton
					width="40px"
					height="18px"
					style={{ marginTop: "10px" }}
				/>
			</div>
			<hr className="m-0 p-0" />
			<div className="overflow-hidden">
				<Skeleton width="614px" height="1000px" />
			</div>
			<div className="post_footer overflow-hidden">
				<div className="post_icons d-flex align-items-center p-3">
					<div className="mr-3 like_icon">
						<Skeleton circle={true} width="30px" height="30px" />
					</div>
					<div className="mr-3 comment_icon">
						<Skeleton circle={true} width="30px" height="30px" />
					</div>
					<div className="share_icon">
						<Skeleton circle={true} width="30px" height="30px" />
					</div>
					<div className="bookmark_icon ml-auto">
						<Skeleton circle={true} width="30px" height="30px" />
					</div>
				</div>
				<div className="count_likes_views p-3">
					<Skeleton
						width="200px"
						height="18px"
						style={{ marginTop: "10px" }}
					/>
				</div>
			</div>
		</div>
	);
}
