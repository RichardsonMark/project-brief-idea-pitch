

const LeagueSelector = ({ changeLeague, label }) => {
    return (
      <form>
        <div>
          <label>{label}</label>
          <select
            name="leagues"
            onChange={(event) => changeLeague(event.target.value)}
          >
            <option value="0">Serie A</option>
            <option value="1">Bundesliga</option>
            <option value="2">La Liga</option>
            <option value="3">Ligue 1</option>
            <option value="4">Premier League</option>
            <option value="5">Eredivisie</option>
          </select>
        </div>
      </form>
    );
};


export default LeagueSelector;
