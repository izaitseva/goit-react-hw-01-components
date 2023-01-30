import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id} data={friend} />))}
        </ul>
    )
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.oneOf(['true', 'false']),
}