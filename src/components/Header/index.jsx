import { useState } from "react";
import { Link } from "react-router-dom";
import nav from "./nav";
import Loading from "../details/loading";

const Header = () => {
	const [likes, setLikes] = useState(false);

	return (
		<div className="header">
			<div className="container h-100">
				<div className="header-nav-wrapper h-100">
					<Link to="/" className="instagram-logo">
						<img
							className="h-100"
							src="./assets/images/Instagram_logo.png"
							width="103"
							height="29"
							alt="instagram icon"
						/>
					</Link>
					<input
						className="mx-auto form-control w-auto px-1"
						style={{ height: "30px", textAlign: "center" }}
						type="text"
						placeholder="Search"
					/>
					<div className="nav-icons">
						{nav.map((n) =>
							n.link !== "/likes" ? (
								<Link to={n.link} key={n.id}>
									{n.link === window.location.pathname
										? likes
											? n.icon_no_active
											: n.icon_active
										: n.icon_no_active}
								</Link>
							) : (
								<button
									key={n.id}
									onBlur={() => setLikes(false)}
									style={{
										padding: "0",
										border: "none",
										background: "none",
										cursor: "pointer",
									}}
									onClick={() => setLikes(!likes)}
								>
									{likes ? n.icon_active : n.icon_no_active}
								</button>
							)
						)}
					</div>
					{likes ? (
						<div className="likes-modal d-flex align-items-center justify-content-center p-3">
							<Loading />
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Header;
