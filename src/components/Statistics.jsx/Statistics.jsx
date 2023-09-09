import { SectionStatistics } from "components/index.styled";
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsTitle, StatisticsItem } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <SectionStatistics>
                <StatisticsTitle>{title}</StatisticsTitle>
                <StatisticsList>
                    {stats.map(({ id, label, percentage }) => {
                        return <StatisticsItem key={id}>
                            <span>{label}</span>
                            <span>{percentage}%</span>
                        </StatisticsItem>
                    })}
                </StatisticsList>
            </SectionStatistics>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired
    })
}