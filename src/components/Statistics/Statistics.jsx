import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const StatList = ({ statsData }) => (
    <ul className={css["stat-list"]}>
        {statsData.map(stat => (
            <li style={{ backgroundColor: getRandomHexColor() }} className={css.item} key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>
        ))}
    </ul >
);

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && (
                <h2 className={css.title}>{title}</h2>
            )}
            <StatList statsData={stats} />
        </section >
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
};