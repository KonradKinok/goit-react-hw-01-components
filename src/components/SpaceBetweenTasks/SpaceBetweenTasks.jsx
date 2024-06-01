import PropTypes from "prop-types";
import css from "./SpaceBetweenTasks.module.css";

export const SpaceBetweenTasks = ({ message = "Zadanie" }) => {
    return (
        <>
            <h2 className={css.title}>{message}</h2>
        </>
    );
};

SpaceBetweenTasks.propTypes = {
    message: PropTypes.string,
};