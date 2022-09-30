import { IPerson } from './Person.types';

type IPersonListProps = {
  people: IPerson[];
};

const PersonList: React.FC<IPersonListProps> = ({ people }) => {
  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <h1>
            {person.name.first} {person.name.last} is {person.age} years old.
          </h1>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
