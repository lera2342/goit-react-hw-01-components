import { FriendsList } from "./FriendList";
import { FriendsItem, FriendSpan } from "./FriendList.styled";
import PropTypes from "prop-types";

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            <FriendSpan $isOnline={isOnline}></FriendSpan>
            <img src={avatar} alt={name} width="50" />
            <p>{name}</p>
        </FriendsItem>
    )
}

FriendsListItem.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}
