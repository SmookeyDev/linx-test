import Search from '../components/search';
import Card from '../components/card';
import React from 'react';

const App = () => {
  const [location, setLocation] = React.useState('Lauro de Freitas')
  const [value, setValue] = React.useState('Lauro de Freitas')

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setLocation(value), 1000);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <main className="bg-rootblue min-h-screen">
      <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
        <Search onLocationChange={handleOnChange} />
        <div className="bg-blackhowl shadow-lg rounded-lg h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4">
          <Card location={location} />
        </div>
      </div>
    </main>
  );
};

export default App;
