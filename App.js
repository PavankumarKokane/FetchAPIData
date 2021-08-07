import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>UserData</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>User Information:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '.Name:- ' + item.name  + '\nEmail:-' + item.email + '\nCity:-' + item.address.city  + '\nWebSite:-' + item.website + '\n'}</Text>
            
            )}
          />
        </View>
      )}
    </View>
  );
};