import PropTypes from "prop-types";
import css from "./FriendList.module.css";


const StatusClass = (isOnline) => {
    return isOnline ? css.isOnline : css.isOffline;
};
const FriendListItem = ({ friendList }) => (
    friendList.map(friend => (
        <li className={css.item} key={friend.id}>
            <span className={[css.status, StatusClass(friend.isOnline)].join(' ')} ></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
        </li >
    ))
);

export const FriendList = ({ friends }) => {
    return (
        <ul className={css["friend-list"]}>
            <FriendListItem friendList={friends} />
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })),
};