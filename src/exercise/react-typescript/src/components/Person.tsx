import type { IPerson } from './Person.types';

const Person: React.FC<IPerson> = props => {
  const { name, age } = props;

  return (
    <div>
      <h1>
        {name.first} {name.last} is {age} years old.
      </h1>
    </div>
  );
};
export default Person;
