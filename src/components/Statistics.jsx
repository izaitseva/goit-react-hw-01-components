
import PropTypes from "prop-types";
import { Title, Statlist, StatItem, Label, Percentage, Section } from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <Statlist>
        {stats.map(data => {

          const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

          return (
            <StatItem key={data.id} className="item" style={{'backgroundColor': randomColor}}>
              <Label>{data.label}</Label>
              <Percentage>{data.percentage}%</Percentage>
            </StatItem>
          )
        })}
      </Statlist>
    </Section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired,
}