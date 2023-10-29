function findTheOldest(people) {
    const currentYear = new Date().getFullYear(); // Get the current year
  
    // Use the reduce function to find the oldest person
    const oldestPerson = people.reduce((oldest, person) => {
      // Calculate the age of the person (accounting for people with no death date)
      const age = person.death ? person.death - person.birth : currentYear - person.birth;
  
      // Compare the age of the current person with the previously found oldest person
      return age > oldest.age ? { ...person, age } : oldest;
    }, { age: 0 }); // Initialize with age 0
  
    return oldestPerson;
  }
  
  // Example usage:
  const people = [
    {
      name: 'Alice',
      birth: 1980,
      death: 2020
    },
    {
      name: 'Bob',
      birth: 1955,
      death: 2010
    },
    {
      name: 'Charlie',
      birth: 1965
    }
  ];
  
  const oldest = findTheOldest(people);
  console.log(oldest.name); // Output: "Alice"
  