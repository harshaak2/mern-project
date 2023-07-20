import React from "react";
import "./UserItem.css";
import Avatar from "../../others/UIElements/Avatar";
import Card from "../../others/UIElements/Card";
// react-router-dom is used here to redirect to user's page on clicking on the user's name
import { Link } from "react-router-dom";
// Link is used to wrap and render an anchor tag, and it also adds the navigation logic.

function UserItem(props) {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        {/* <img src={props.image} alt={props.name} /> */}
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        {/* if there are 0 places? - change the ternary statement */}
                        <h3>
                            {props.placeCount}{" "}
                            {props.placeCount === 1 ? "Place" : "Places"}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default UserItem;
