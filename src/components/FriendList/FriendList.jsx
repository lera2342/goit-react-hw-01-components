import { BodyContainer } from "components/index.styled";
import PropTypes from 'prop-types';
import {FriendsListItem} from "components/FriendList/FriendListItem"



export const FriendsList = ({ friends }) => {
    return (
        <BodyContainer>
            <ul>
                {friends.map(({ avatar, name, isOnline, id }) => 
                    <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
                )}
                </ul>
        </BodyContainer>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
}

