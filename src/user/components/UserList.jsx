import React from "react";
import UserItem from "./UserItem";
import Card from "../../others/UIElements/Card";
function UserList(props) {
    //? is this if statement working? - how to make this statement execute?
    if (props.items.length === 0) {
        return (
            <div
                style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card>
                    <h2>No Items Found!</h2>
                </Card>
            </div>
        );
    } else {
        return (
            // div not mentioned in sol
            <div>
                {/* prevents from becoming larger than the specified max width. */}
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "center",
                        width: "90%",
                        margin: "0 auto",
                        padding: 0,
                        maxWidth: "50rem",
                        flexWrap: "wrap",
                    }}
                    // className="users-list"
                >
                    {props.items.map((user) => {
                        return (
                            <UserItem
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                image={user.image}
                                placeCount={user.places}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default UserList;
