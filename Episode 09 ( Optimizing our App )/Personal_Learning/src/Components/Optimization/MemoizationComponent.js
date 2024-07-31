import React, { useMemo } from 'react';

// Memoization prevents unnecessary re-renders by caching results of expensive calculations.

export function ExpensiveComponent({ count }) {
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return <div>{expensiveCalculation}</div>;
}


// React.memo is a higher-order component that prevents a component from re-rendering if its props haven't changed.
// Preventing Re-renders with React.memo

export const MyComponent = React.memo(({ name }) => {
    console.log('Rendering...');
    return <div>Hello, {name}!</div>;
  });


  const ListItem = React.memo(({ item }) => {
    console.log(`Rendering ${item.name}`);
    return <li>{item.name}</li>;
  });
  
  function ItemList({ items }) {
    return (
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }

// React.memo prevents the ListItem component from re-rendering if its props (item in this case) 
// haven't changed. This is especially useful in lists where only a few items might change.