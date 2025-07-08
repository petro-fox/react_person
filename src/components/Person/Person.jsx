export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p className="Person__age">
      {person.age !== undefined ? `I am ${person.age}` : ''}
    </p>
    <p className="Person__isMarried">
      {person.isMarried === false ? (
        'I am not married'
      ) : (
        <p className="Person__partner">
          {person.partnerName !== undefined
            ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
            : ''}
        </p>
      )}
    </p>
  </section>
);
