import { Link } from "react-router-dom";

interface Props {
  border: string;
}

const BorderCountries = ({ border }: Props) => {
  return (
    <Link to={`/country/${border}`}>
      <button>{border}</button>
    </Link>
  );
};

export default BorderCountries;
